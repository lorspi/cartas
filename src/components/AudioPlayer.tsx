import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CrosshairIcon, FastForwardIcon, HeadphonesIcon, PauseIcon, PlayIcon, RewindIcon, RobotIcon, XIcon } from '@phosphor-icons/react';
import { AudioFragment, LetterAudio, fragmentAt, locateFragments } from '../utils/readAlong';

const SPEEDS = [1, 1.15, 1.3, 0.85];
/** After the reader scrolls by hand, stop auto-following for this long. */
const FOLLOW_PAUSE_MS = 6000;

function formatTime(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = String(s % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
}

/** Paints the sentence being read as one box per line, stretched to the full
 *  line height so consecutive lines join into a single block (the CSS Custom
 *  Highlight API can't pad or fill the leading). The boxes live in a layer on
 *  top of the page and blend with the text, see `.read-along-mark`. */
function paintMark(layer: HTMLElement, range: Range | null) {
  layer.replaceChildren();
  const el = range?.startContainer.parentElement;
  if (!range || !el) return;

  const style = getComputedStyle(el);
  const fontSize = parseFloat(style.fontSize) || 16;
  const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.2;
  const padX = fontSize * 0.3;
  const radius = fontSize * 0.2;

  // Merge the range's rects (text runs, <em>, <strong>…) into one per line.
  const lines: { left: number; right: number; mid: number }[] = [];
  for (const rect of Array.from(range.getClientRects())) {
    if (rect.width < 1 || rect.height < 1) continue;
    const mid = (rect.top + rect.bottom) / 2;
    const line = lines.find((l) => Math.abs(l.mid - mid) < lineHeight / 2);
    if (line) {
      line.left = Math.min(line.left, rect.left);
      line.right = Math.max(line.right, rect.right);
    } else {
      lines.push({ left: rect.left, right: rect.right, mid });
    }
  }
  lines.sort((a, b) => a.mid - b.mid);

  // Neighbouring lines share an edge (rounded to whole pixels so no seam shows);
  // a sentence running into the next paragraph doesn't bridge the margin.
  const joined = (a?: (typeof lines)[number], b?: (typeof lines)[number]) =>
    !!a && !!b && b.mid - a.mid <= lineHeight * 1.1;
  const { scrollX, scrollY } = window;
  lines.forEach((line, i) => {
    const prev = joined(lines[i - 1], line) ? lines[i - 1] : undefined;
    const next = joined(line, lines[i + 1]) ? lines[i + 1] : undefined;
    const top = Math.round(scrollY + (prev ? (prev.mid + line.mid) / 2 : line.mid - lineHeight / 2));
    const bottom = Math.round(scrollY + (next ? (line.mid + next.mid) / 2 : line.mid + lineHeight / 2));
    const left = line.left - padX;
    const right = line.right + padX;
    // Round only the corners that stick out past the neighbouring line.
    const corner = (outside: boolean) => (outside ? `${radius}px` : '0');
    const box = document.createElement('span');
    box.style.cssText = `top:${top}px;left:${left + scrollX}px;width:${right - left}px;height:${bottom - top}px;border-radius:${[
      corner(!prev || prev.left - padX > left),
      corner(!prev || prev.right + padX < right),
      corner(!next || next.right + padX < right),
      corner(!next || next.left - padX > left),
    ].join(' ')}`;
    layer.append(box);
  });
}

/** Elements whose text the narration reads: the title and the letter body. */
function readAlongRoots(): Element[] {
  return ['#letter-top h1', '#letter-reading-body']
    .map((selector) => document.querySelector(selector))
    .filter((el): el is Element => el !== null);
}

interface AudioPlayerProps {
  slug: string;
  title: string;
  /** Without the site header the sticky bar sits at the very top. */
  isFocusMode: boolean;
  /** Start playing as soon as the audio is available (from a list's "Escuchar"). */
  autoPlay?: boolean;
  /** With `autoPlay`: the page was restored to the reader's saved position, so
   *  start from the sentence on screen instead of the beginning ("Continuar"). */
  startAtReadingPosition?: boolean;
}

/** Narrated version of a letter. Renders nothing unless
 *  `public/audio/<slug>.json` (timings) exists next to `<slug>.mp3`.
 *  While a listening session is active the bar sticks below the header,
 *  highlights the sentence being read and scrolls the page along with it. */
export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  slug,
  title,
  isFocusMode,
  autoPlay = false,
  startAtReadingPosition = false,
}) => {
  const base = `${import.meta.env.BASE_URL}audio/${slug}`;
  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<LetterAudio | null>(null);
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(false); // session started and not closed
  const [time, setTime] = useState(0);
  const [speedIndex, setSpeedIndex] = useState(0);
  const [following, setFollowing] = useState(true);
  // Autoplay was requested but the browser blocked it: invite a tap instead.
  const [needsTap, setNeedsTap] = useState(false);

  const rangesRef = useRef<(Range | null)[] | null>(null);
  const currentRef = useRef(-1);
  const followTimer = useRef<number | undefined>(undefined);

  // Load the timings; a missing file just means this letter has no audio.
  useEffect(() => {
    let cancelled = false;
    setData(null);
    setActive(false);
    setPlaying(false);
    setTime(0);
    setNeedsTap(false);
    rangesRef.current = null;
    currentRef.current = -1;
    fetch(`${base}.json`)
      .then((res) => (res.ok ? res.json() : null))
      .then((json: LetterAudio | null) => {
        if (!cancelled && json && Array.isArray(json.fragments)) setData(json);
      })
      .catch(() => {
        /* offline or no audio for this letter */
      });
    return () => {
      cancelled = true;
    };
  }, [base]);

  // Arriving from a list's "Escuchar": start right away. The click that got
  // us here usually counts as user activation; browsers that still refuse
  // (mostly iOS Safari) get a highlighted play button instead.
  useEffect(() => {
    const audio = audioRef.current;
    if (!autoPlay || !data || !audio) return;

    const start = () => {
      if (startAtReadingPosition) {
        const index = fragmentOnScreen(data.fragments);
        if (index > 0) audio.currentTime = data.fragments[index].start;
      }
      setActive(true);
      audio.play().catch(() => {
        setActive(false);
        setNeedsTap(true);
      });
    };

    if (!startAtReadingPosition) {
      start();
      return;
    }
    // Let the letter view restore the saved scroll position first (it does so
    // on the next animation frame), then read which sentence is on screen.
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(start);
    });
    return () => cancelAnimationFrame(frame);
    // Runs once per loaded letter; the other inputs are read at that moment.
  }, [autoPlay, data]);

  const markRef = useRef<HTMLDivElement | null>(null);

  const showMark = useCallback((range: Range | null) => {
    if (!markRef.current) {
      if (!range) return;
      markRef.current = document.createElement('div');
      markRef.current.className = 'read-along-mark';
      markRef.current.setAttribute('aria-hidden', 'true');
      document.body.append(markRef.current);
    }
    paintMark(markRef.current, range);
  }, []);

  const clearHighlight = useCallback(() => {
    showMark(null);
    currentRef.current = -1;
  }, [showMark]);

  useEffect(() => clearHighlight, [clearHighlight, slug]);

  useEffect(
    () => () => {
      markRef.current?.remove();
      markRef.current = null;
    },
    []
  );

  /** Ranges are located lazily and rebuilt if React replaced the text nodes.
   *  A range whose text node was removed collapses onto a connected ancestor,
   *  so a live range is one that still starts inside a connected text node. */
  const rangesFor = useCallback((fragments: AudioFragment[]): (Range | null)[] => {
    let ranges = rangesRef.current;
    // Check every range: the title, for one, is never replaced with the body.
    const stale = ranges?.some(
      (range) => range && (range.startContainer.nodeType !== Node.TEXT_NODE || !range.startContainer.isConnected)
    );
    if (!ranges || stale) {
      ranges = locateFragments(readAlongRoots(), fragments);
      rangesRef.current = ranges;
    }
    return ranges;
  }, []);

  const rangeFor = useCallback(
    (index: number, fragments: AudioFragment[]): Range | null => rangesFor(fragments)[index] ?? null,
    [rangesFor]
  );

  /** Where the bar's bottom edge sits once stuck below the header (h-16). */
  const stuckBarBottom = useCallback(
    () => (isFocusMode ? 0 : 64) + (barRef.current?.offsetHeight ?? 0),
    [isFocusMode]
  );

  /** First fragment reaching the reading line: the spot where auto-follow keeps
   *  the sentence being read (30% down the area below the bar). Leans a little
   *  earlier so resuming never skips the sentence the reader stopped on. */
  const fragmentOnScreen = (fragments: AudioFragment[]): number => {
    const ranges = rangesFor(fragments);
    const barBottom = stuckBarBottom();
    const line = barBottom + (window.innerHeight - barBottom) * 0.2;
    return ranges.findIndex((range) => range !== null && range.getBoundingClientRect().bottom >= line);
  };

  const scrollToRange = useCallback((range: Range) => {
    const rect = range.getBoundingClientRect();
    // Use the stuck position: the bar may not be stuck yet when a seek jumps
    // far down the letter.
    const barBottom = stuckBarBottom();
    const comfortableTop = barBottom + 24;
    const comfortableBottom = window.innerHeight - 120;
    if (rect.top < comfortableTop || rect.bottom > comfortableBottom) {
      const delta = rect.top - (barBottom + (window.innerHeight - barBottom) * 0.3);
      // Long jumps (seeking) are instant; reading along glides smoothly.
      const behavior = Math.abs(delta) > window.innerHeight * 1.5 ? 'instant' : 'smooth';
      window.scrollTo({ top: Math.max(0, window.scrollY + delta), behavior });
    }
  }, [stuckBarBottom]);

  // Highlight (and follow) the fragment being read.
  const syncTo = useCallback(
    (seconds: number, forceScroll = false) => {
      if (!data) return;
      const index = fragmentAt(data.fragments, seconds);
      if (index === currentRef.current && !forceScroll) return;
      currentRef.current = index;
      const range = index >= 0 ? rangeFor(index, data.fragments) : null;
      showMark(range);
      if (range && (following || forceScroll)) scrollToRange(range);
    },
    [data, following, rangeFor, scrollToRange, showMark]
  );

  // Changing the font size, focus mode or theme re-renders the letter: React
  // may replace its text nodes (leaving the located ranges collapsed) and the
  // text reflows. Re-locate, redraw the mark and keep the sentence in view.
  useEffect(() => {
    if (!active || !data) return;
    let frame = 0;
    const refresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const index = currentRef.current;
        if (index < 0) return;
        const range = rangeFor(index, data.fragments);
        showMark(range);
        if (range && following && playing) scrollToRange(range);
      });
    };
    const invalidate = () => {
      rangesRef.current = null;
      refresh();
    };
    const roots = readAlongRoots();
    const resizes = new ResizeObserver(refresh);
    const mutations = new MutationObserver(invalidate);
    for (const root of roots) {
      resizes.observe(root);
      mutations.observe(root, { childList: true, subtree: true, characterData: true });
    }
    window.addEventListener('resize', refresh);
    return () => {
      cancelAnimationFrame(frame);
      resizes.disconnect();
      mutations.disconnect();
      window.removeEventListener('resize', refresh);
    };
  }, [active, data, following, playing, rangeFor, scrollToRange, showMark]);

  // Manual scrolling pauses auto-follow for a moment so the reader isn't
  // dragged back while looking around the letter.
  useEffect(() => {
    if (!playing) return;
    const pauseFollow = () => {
      setFollowing(false);
      window.clearTimeout(followTimer.current);
      followTimer.current = window.setTimeout(() => setFollowing(true), FOLLOW_PAUSE_MS);
    };
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) pauseFollow();
    };
    window.addEventListener('wheel', pauseFollow, { passive: true });
    window.addEventListener('touchmove', pauseFollow, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', pauseFollow);
      window.removeEventListener('touchmove', pauseFollow);
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(followTimer.current);
    };
  }, [playing]);

  // While listening, tapping a paragraph (or the title) jumps the narration to
  // its first sentence and keeps reading from there.
  useEffect(() => {
    if (!active || !data) return;
    const roots = readAlongRoots();
    const BLOCKS = 'p, li, blockquote, h1, h2, h3, h4, h5, h6, pre, figcaption';

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      // Links, buttons and text selections keep their usual behaviour.
      if (!target || target.closest('a, button, input, label, summary')) return;
      if (!window.getSelection()?.isCollapsed) return;
      const root = roots.find((r) => r.contains(target));
      const block = target.closest(BLOCKS);
      if (!root || !block || !root.contains(block)) return;

      const ranges = rangesFor(data.fragments);
      // Prefer the first sentence that starts in the paragraph; fall back to
      // one that runs into it from the previous paragraph.
      let index = ranges.findIndex((range) => range !== null && block.contains(range.startContainer));
      if (index === -1) index = ranges.findIndex((range) => range !== null && range.intersectsNode(block));
      const audio = audioRef.current;
      if (index === -1 || !audio) return;

      audio.currentTime = data.fragments[index].start;
      setTime(audio.currentTime);
      window.clearTimeout(followTimer.current);
      setFollowing(true);
      syncTo(audio.currentTime, true);
      if (audio.paused) void audio.play();
    };

    for (const root of roots) {
      root.addEventListener('click', onClick);
      root.classList.add('read-along-seekable');
    }
    return () => {
      for (const root of roots) {
        root.removeEventListener('click', onClick);
        root.classList.remove('read-along-seekable');
      }
    };
  }, [active, data, rangesFor, syncTo]);

  // Lock-screen / headset controls.
  useEffect(() => {
    if (!active || !('mediaSession' in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title,
      artist: 'Cartas que quedan · voz generada con IA',
    });
    const audio = audioRef.current;
    const handlers: [MediaSessionAction, MediaSessionActionHandler][] = [
      ['play', () => audio?.play()],
      ['pause', () => audio?.pause()],
      ['seekbackward', () => audio && (audio.currentTime -= 15)],
      ['seekforward', () => audio && (audio.currentTime += 15)],
    ];
    for (const [action, handler] of handlers) {
      try {
        navigator.mediaSession.setActionHandler(action, handler);
      } catch {
        /* action not supported */
      }
    }
    return () => {
      for (const [action] of handlers) {
        try {
          navigator.mediaSession.setActionHandler(action, null);
        } catch {
          /* ignore */
        }
      }
    };
  }, [active, title]);

  if (!data) return null;

  const duration = data.duration;

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      setActive(true);
      setNeedsTap(false);
      void audio.play();
    } else {
      audio.pause();
    }
  };

  const seekTo = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(0, seconds), duration);
    setTime(audio.currentTime);
    syncTo(audio.currentTime, true);
  };

  const close = () => {
    audioRef.current?.pause();
    setActive(false);
    clearHighlight();
  };

  const cycleSpeed = () => {
    const next = (speedIndex + 1) % SPEEDS.length;
    setSpeedIndex(next);
    if (audioRef.current) audioRef.current.playbackRate = SPEEDS[next];
  };

  const resumeFollowing = () => {
    window.clearTimeout(followTimer.current);
    setFollowing(true);
    syncTo(audioRef.current?.currentTime ?? time, true);
  };

  // Same look as the reading controls. No `display` utility here so callers
  // can choose (e.g. `hidden sm:inline-flex`).
  const iconButton =
    'items-center justify-center min-w-8 h-8 rounded-full text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] hover:bg-[#ece9e4] dark:hover:bg-[#2a2927] transition-colors';
  const divider = 'h-3.5 w-px bg-[#dad4cb] dark:bg-[#383633] mx-1';
  const progress = duration ? Math.min(100, (time / duration) * 100) : 0;

  return (
    <div
      ref={barRef}
      className={`z-30 mb-12 sm:mb-14 ${
        // While sticky, a strip of page colour behind the card keeps the text
        // from showing through between the header and the player.
        active
          ? `sticky ${isFocusMode ? 'top-0' : 'top-16'} -mx-2 px-2 pt-2 pb-1 bg-[#ece9e4] dark:bg-[#1c1b1b]`
          : ''
      }`}
    >
      <audio
        ref={audioRef}
        src={`${base}.mp3`}
        preload="none"
        onPlay={() => {
          setPlaying(true);
          setFollowing(true);
          syncTo(audioRef.current?.currentTime ?? 0, true);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setActive(false);
          clearHighlight();
        }}
        onTimeUpdate={(e) => {
          const t = e.currentTarget.currentTime;
          setTime(t);
          syncTo(t);
        }}
      />

      <div
        role="region"
        aria-label="Versión narrada de la carta"
        className={`rounded-xs border border-[#dad4cb] dark:border-[#383633] bg-[#f5f1ec] dark:bg-[#242321] transition-shadow ${
          active ? 'shadow-[0_10px_24px_-14px_rgb(33_30_28/0.35)] dark:shadow-[0_10px_24px_-14px_rgb(0_0_0/0.7)]' : 'shadow-xs'
        }`}
      >
        <div className={`flex items-center gap-3 sm:gap-4 px-3 sm:px-4 ${active ? 'py-2.5' : 'py-3.5'}`}>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? 'Pausar narración' : 'Escuchar la carta'}
            className={`shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#211e1c] dark:bg-[#ede7e0] text-[#ece9e4] dark:text-[#1c1b1b] hover:bg-[#b84e2a] dark:hover:bg-[#cf6e4b] dark:hover:text-white transition-colors ${
              needsTap ? 'ring-4 ring-[#b84e2a]/30 dark:ring-[#cf6e4b]/30 animate-pulse' : ''
            }`}
          >
            {playing ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5 ml-0.5" />}
          </button>

          {active ? (
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 font-sans text-[11px] text-[#8c8479] dark:text-[#7d756a] tabular-nums">
                <span>{formatTime(time)}</span>
                <span className="inline-flex items-center gap-1 min-w-0 uppercase tracking-wider text-[10px]">
                  <RobotIcon className="w-3.5 h-3.5 shrink-0 text-[#b84e2a] dark:text-[#cf6e4b]" aria-hidden="true" />
                  <span className="truncate">Voz generada con IA</span>
                </span>
                <span>−{formatTime(duration - time)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={duration}
                step={1}
                value={time}
                onChange={(e) => seekTo(Number(e.target.value))}
                aria-label="Posición de la narración"
                aria-valuetext={`${formatTime(time)} de ${formatTime(duration)}`}
                className="audio-range block w-full mt-1"
                style={{ '--progress': `${progress}%` } as React.CSSProperties}
              />
            </div>
          ) : (
            <div className="flex-1 min-w-0">
              <p className="font-sans text-[11px] uppercase tracking-wider text-[#6b645c] dark:text-[#9c958c] inline-flex items-center gap-1.5">
                <HeadphonesIcon className="w-4 h-4 text-[#b84e2a] dark:text-[#cf6e4b]" aria-hidden="true" />
                {needsTap ? (
                  <span className="text-[#211e1c] dark:text-[#ede7e0] font-medium">Toca ▶ para empezar a escuchar</span>
                ) : (
                  <>
                    <span className="text-[#211e1c] dark:text-[#ede7e0] font-medium">Escuchar la carta</span>
                    <span>· {formatTime(duration)}</span>
                  </>
                )}
              </p>
              <p className="font-serif italic text-sm text-[#6b645c] dark:text-[#9c958c] mt-1 leading-snug">
                <RobotIcon className="inline w-3.5 h-3.5 -mt-0.5 mr-1 not-italic text-[#b84e2a] dark:text-[#cf6e4b]" aria-hidden="true" />
                Narración con voz generada por inteligencia artificial a partir de la voz del autor.
              </p>
            </div>
          )}

          {active && (
            <div className="flex items-center shrink-0 text-[#6b645c] dark:text-[#9c958c]">
              <button type="button" onClick={() => seekTo(time - 15)} aria-label="Retroceder 15 segundos" title="Retroceder 15 s" className={`${iconButton} hidden sm:inline-flex`}>
                <RewindIcon className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => seekTo(time + 15)} aria-label="Adelantar 15 segundos" title="Adelantar 15 s" className={`${iconButton} hidden sm:inline-flex`}>
                <FastForwardIcon className="w-4 h-4" />
              </button>
              <span className={`${divider} hidden sm:block`} aria-hidden="true" />
              <button
                type="button"
                onClick={cycleSpeed}
                aria-label={`Velocidad ${SPEEDS[speedIndex]}x`}
                title="Velocidad de lectura"
                className={`${iconButton} inline-flex px-2 font-serif text-xs tabular-nums`}
              >
                {SPEEDS[speedIndex]}×
              </button>
              {!following && playing && (
                <button type="button" onClick={resumeFollowing} aria-label="Volver al texto que se está leyendo" title="Volver al texto" className={`${iconButton} inline-flex`}>
                  <CrosshairIcon className="w-4 h-4" />
                </button>
              )}
              <span className={divider} aria-hidden="true" />
              <button type="button" onClick={close} aria-label="Cerrar reproductor" title="Cerrar" className={`${iconButton} inline-flex`}>
                <XIcon className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
