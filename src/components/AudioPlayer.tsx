import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Bot, Headphones, LocateFixed, Pause, Play, RotateCcw, RotateCw, X } from 'lucide-react';
import { AudioFragment, LetterAudio, fragmentAt, locateFragments } from '../utils/readAlong';

const HIGHLIGHT_NAME = 'carta-lectura';
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

function supportsHighlights(): boolean {
  return typeof CSS !== 'undefined' && 'highlights' in CSS && typeof Highlight !== 'undefined';
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
}

/** Narrated version of a letter. Renders nothing unless
 *  `public/audio/<slug>.json` (timings) exists next to `<slug>.mp3`.
 *  While a listening session is active the bar sticks below the header,
 *  highlights the sentence being read and scrolls the page along with it. */
export const AudioPlayer: React.FC<AudioPlayerProps> = ({ slug, title, isFocusMode }) => {
  const base = `${import.meta.env.BASE_URL}audio/${slug}`;
  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<LetterAudio | null>(null);
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(false); // session started and not closed
  const [time, setTime] = useState(0);
  const [speedIndex, setSpeedIndex] = useState(0);
  const [following, setFollowing] = useState(true);

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

  const clearHighlight = useCallback(() => {
    if (supportsHighlights()) CSS.highlights.delete(HIGHLIGHT_NAME);
    currentRef.current = -1;
  }, []);

  useEffect(() => clearHighlight, [clearHighlight, slug]);

  /** Ranges are located lazily and rebuilt if React replaced the text nodes. */
  const rangeFor = useCallback(
    (index: number, fragments: AudioFragment[]): Range | null => {
      let ranges = rangesRef.current;
      const stale = ranges?.[index] && !ranges[index]!.startContainer.isConnected;
      if (!ranges || stale) {
        ranges = locateFragments(readAlongRoots(), fragments);
        rangesRef.current = ranges;
      }
      return ranges[index] ?? null;
    },
    []
  );

  const scrollToRange = useCallback((range: Range) => {
    const rect = range.getBoundingClientRect();
    // Where the bar's bottom edge sits once stuck (it may not be stuck yet when
    // a seek jumps far down the letter). Header is h-16 = 64px.
    const barBottom = (isFocusMode ? 0 : 64) + (barRef.current?.offsetHeight ?? 0);
    const comfortableTop = barBottom + 24;
    const comfortableBottom = window.innerHeight - 120;
    if (rect.top < comfortableTop || rect.bottom > comfortableBottom) {
      const delta = rect.top - (barBottom + (window.innerHeight - barBottom) * 0.3);
      // Long jumps (seeking) are instant; reading along glides smoothly.
      const behavior = Math.abs(delta) > window.innerHeight * 1.5 ? 'instant' : 'smooth';
      window.scrollTo({ top: Math.max(0, window.scrollY + delta), behavior });
    }
  }, [isFocusMode]);

  // Highlight (and follow) the fragment being read.
  const syncTo = useCallback(
    (seconds: number, forceScroll = false) => {
      if (!data) return;
      const index = fragmentAt(data.fragments, seconds);
      if (index === currentRef.current && !forceScroll) return;
      currentRef.current = index;
      const range = index >= 0 ? rangeFor(index, data.fragments) : null;
      if (supportsHighlights()) {
        if (range) CSS.highlights.set(HIGHLIGHT_NAME, new Highlight(range));
        else CSS.highlights.delete(HIGHLIGHT_NAME);
      }
      if (range && (following || forceScroll)) scrollToRange(range);
    },
    [data, following, rangeFor, scrollToRange]
  );

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

  // No `display` utility here so callers can choose (e.g. `hidden sm:inline-flex`).
  const iconButton =
    'items-center justify-center min-w-9 h-9 rounded-full text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] hover:bg-[#dad4cb]/40 dark:hover:bg-[#383633]/60 transition-colors';

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
        className={`rounded-lg border border-[#dad4cb] dark:border-[#383633] bg-[#f5f1ec] dark:bg-[#201f1d] ${
          active ? 'shadow-lg' : 'shadow-xs'
        }`}
      >
        <div className="flex items-center gap-3 px-3 sm:px-4 py-3">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? 'Pausar narración' : 'Escuchar la carta'}
            className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#b84e2a] dark:bg-[#cf6e4b] text-white hover:bg-[#a04322] dark:hover:bg-[#d97e5c] transition-colors shadow-sm"
          >
            {playing ? <Pause className="w-5 h-5" fill="currentColor" /> : <Play className="w-5 h-5 ml-0.5" fill="currentColor" />}
          </button>

          {active ? (
            <div className="flex-1 min-w-0">
              <input
                type="range"
                min={0}
                max={duration}
                step={1}
                value={time}
                onChange={(e) => seekTo(Number(e.target.value))}
                aria-label="Posición de la narración"
                aria-valuetext={`${formatTime(time)} de ${formatTime(duration)}`}
                className="w-full h-1.5 accent-[#b84e2a] dark:accent-[#cf6e4b] cursor-pointer"
              />
              <div className="flex items-center justify-between gap-2 mt-1 font-sans text-[11px] text-[#8c8479] dark:text-[#7d756a] tabular-nums">
                <span>{formatTime(time)}</span>
                <span className="inline-flex items-center gap-1 truncate">
                  <Bot className="w-3 h-3 shrink-0 text-[#b84e2a] dark:text-[#cf6e4b]" aria-hidden="true" />
                  <span className="truncate">Voz generada con IA</span>
                </span>
                <span>-{formatTime(duration - time)}</span>
              </div>
            </div>
          ) : (
            <div className="flex-1 min-w-0">
              <p className="font-sans text-sm font-medium text-[#211e1c] dark:text-[#ede7e0] inline-flex items-center gap-1.5">
                <Headphones className="w-4 h-4 text-[#b84e2a] dark:text-[#cf6e4b]" aria-hidden="true" />
                Escuchar la carta · {formatTime(duration)}
              </p>
              <p className="font-sans text-xs text-[#6b645c] dark:text-[#9c958c] mt-0.5 leading-snug">
                <Bot className="inline w-3.5 h-3.5 -mt-0.5 mr-1 text-[#b84e2a] dark:text-[#cf6e4b]" aria-hidden="true" />
                Narración con voz generada por inteligencia artificial a partir de la voz del autor.
              </p>
            </div>
          )}

          {active && (
            <div className="flex items-center shrink-0">
              <button type="button" onClick={() => seekTo(time - 15)} aria-label="Retroceder 15 segundos" className={`${iconButton} hidden sm:inline-flex`}>
                <RotateCcw className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => seekTo(time + 15)} aria-label="Adelantar 15 segundos" className={`${iconButton} hidden sm:inline-flex`}>
                <RotateCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={cycleSpeed}
                aria-label={`Velocidad ${SPEEDS[speedIndex]}x`}
                className={`${iconButton} inline-flex px-2 font-sans text-xs font-semibold tabular-nums`}
              >
                {SPEEDS[speedIndex]}×
              </button>
              {!following && playing && (
                <button type="button" onClick={resumeFollowing} aria-label="Volver al texto que se está leyendo" title="Volver al texto" className={`${iconButton} inline-flex`}>
                  <LocateFixed className="w-4 h-4" />
                </button>
              )}
              <button type="button" onClick={close} aria-label="Cerrar reproductor" className={`${iconButton} inline-flex`}>
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
