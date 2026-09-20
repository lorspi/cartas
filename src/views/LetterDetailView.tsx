import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, Share2, Check, Bookmark } from 'lucide-react';
import { Letter, ThemeMode, FontSizeScale } from '../types';
import { Bot, User } from 'lucide-react';
import { ReadingControls } from '../components/ReadingControls';
import { ReadingProgress } from '../components/ReadingProgress';
import { CategoryBadge } from '../components/CategoryBadge';
import { Quote } from '../components/Quote';
import { TableOfContents } from '../components/TableOfContents';
import { extractHeadings, slugifyHeading, TocHeading } from '../utils/toc';
import { beginLetterSession, READING_COMPLETE_THRESHOLD } from '../utils/readingProgress';

/** Flattens a React heading's children back into plain text so we can derive
 *  the same slug id that {@link extractHeadings} produced for the outline. */
function nodeToText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join('');
  if (React.isValidElement(node)) {
    return nodeToText((node.props as { children?: React.ReactNode }).children);
  }
  return '';
}

type StyleScale = { p: string; h: string; quote: string };

/** Renders inline markdown (bold, italic, links…) for a single dialogue turn.
 *  We reuse ReactMarkdown but strip the wrapping <p> so it flows inside a
 *  chat bubble, and let **bold** inherit the bubble's text colour. */
function InlineMarkdown({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => <>{children}</>,
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

/** Renders the example AI/person dialogue inside its own bordered container so
 *  the reader clearly sees it is an external, illustrative exchange rather than
 *  part of the author's own prose. Each turn is shown as a labelled chat bubble
 *  and speakers alternate (person → AI → person …). */
function AiConversation({ turns, source }: { turns: string[]; source?: string }) {
  return (
    <div
      role="group"
      aria-label={source ?? 'Conversación de ejemplo'}
      className="my-12 rounded-lg border border-[#dad4cb] dark:border-[#383633] bg-[#f5f1ec]/70 dark:bg-[#201f1d]/70 shadow-xs overflow-hidden"
    >
      {/* Header: makes explicit this is an external example */}
      <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-[#dad4cb]/70 dark:border-[#383633]/70 bg-[#ece9e4]/80 dark:bg-[#1a1918]/80">
        <Bot className="w-4 h-4 text-[#b84e2a] dark:text-[#cf6e4b] shrink-0" />
        <span className="font-sans text-[11px] uppercase tracking-wider text-[#6b645c] dark:text-[#9c958c]">
          {source ?? 'Conversación de ejemplo'}
        </span>
      </div>

      {/* Dialogue turns */}
      <div className="px-4 sm:px-5 py-5 space-y-4">
        {turns.map((turn, index) => {
          // Speakers alternate; the exchange opens with the person.
          const isAI = index % 2 === 1;
          return (
            <div
              key={index}
              className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}
            >
              {/* On mobile the avatar sits above the bubble (column layout) so
                  the bubble can stretch nearly full width; from `sm` up it moves
                  back beside the bubble. */}
              <div
                className={`flex flex-col sm:flex-row gap-1.5 sm:gap-2.5 w-[92%] sm:w-auto sm:max-w-[85%] ${
                  isAI
                    ? 'items-start sm:flex-row'
                    : 'items-end sm:flex-row-reverse'
                }`}
              >
                {/* Speaker avatar */}
                <span
                  className={`shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full sm:mt-0.5 ${
                    isAI
                      ? 'bg-[#b84e2a]/12 text-[#b84e2a] dark:bg-[#cf6e4b]/18 dark:text-[#cf6e4b]'
                      : 'bg-[#dad4cb]/60 text-[#6b645c] dark:bg-[#383633]/70 dark:text-[#9c958c]'
                  }`}
                  aria-hidden="true"
                >
                  {isAI ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                </span>

                {/* Bubble */}
                <div
                  className={`w-full sm:w-auto rounded-2xl px-4 py-2.5 font-sans text-[15px] sm:text-[16px] leading-relaxed ${
                    isAI
                      ? 'bg-white dark:bg-[#2a2825] text-[#2b2725] dark:text-[#e4ded6] rounded-tl-sm border border-[#dad4cb]/60 dark:border-[#383633]/60'
                      : 'bg-[#b84e2a] dark:bg-[#cf6e4b] text-white rounded-tr-sm'
                  }`}
                >
                  <span className="sr-only">
                    {isAI ? 'Inteligencia artificial: ' : 'Persona: '}
                  </span>
                  <InlineMarkdown text={turn} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type BodySegment =
  | { kind: 'markdown'; content: string }
  | { kind: 'conversation'; turns: string[]; source?: string };

/** Splits the raw markdown body into ordered segments so that any
 *  `<div data-conversation …> … </div>` block is pulled out and rendered by
 *  {@link AiConversation}, while everything else stays plain markdown. Doing the
 *  split on the source text (instead of relying on rehype-raw's HTML handling)
 *  keeps rendering identical in dev and on GitHub Pages. */
function splitBodyIntoSegments(body: string): BodySegment[] {
  const openRe = /<div\b[^>]*\bdata-conversation\b[^>]*>/i;
  const segments: BodySegment[] = [];
  let rest = body;

  while (true) {
    const openMatch = rest.match(openRe);
    if (!openMatch || openMatch.index === undefined) {
      if (rest.trim()) segments.push({ kind: 'markdown', content: rest });
      break;
    }

    const before = rest.slice(0, openMatch.index);
    if (before.trim()) segments.push({ kind: 'markdown', content: before });

    const afterOpen = rest.slice(openMatch.index + openMatch[0].length);
    const closeIndex = afterOpen.search(/<\/div>/i);
    const inner = closeIndex === -1 ? afterOpen : afterOpen.slice(0, closeIndex);

    // Extract the optional source label from the opening tag.
    const sourceMatch = openMatch[0].match(/data-conversation-source=("|')(.*?)\1/i);
    const source = sourceMatch ? sourceMatch[2] : undefined;

    // Each dialogue turn is a paragraph that starts with the em dash «—».
    const turns = inner
      .split(/\n\s*\n/)
      .map((t) => t.trim())
      .filter(Boolean)
      .map((t) => t.replace(/^—\s*/, '').replace(/\s+/g, ' ').trim())
      .filter(Boolean);

    segments.push({ kind: 'conversation', turns, source });

    rest = closeIndex === -1 ? '' : afterOpen.slice(closeIndex + '</div>'.length);
  }

  return segments;
}

/** Reads the first meaningful character of the markdown body, skipping any
 *  leading markdown syntax that wraps inline text (e.g. `**bold**`, `_em_`,
 *  `> quote`) so we inspect the first *visible* character the reader sees. */
function firstVisibleChar(body: string): string {
  // Work line-by-line: skip blank lines, HTML blocks, headings, dividers,
  // list markers and blockquote markers until we reach real prose.
  for (const rawLine of body.split(/\r?\n/)) {
    let line = rawLine.trim();
    if (!line) continue;
    // Skip block-level markdown / HTML that never becomes the first paragraph.
    if (line.startsWith('#')) continue; // heading
    if (line.startsWith('---') || line.startsWith('***')) continue; // divider
    if (line.startsWith('<')) continue; // raw HTML block (e.g. <blockquote>)
    // Strip leading inline-formatting markers so `**Word**` reports `W`.
    line = line.replace(/^[>\s]*/, ''); // blockquote markers / indentation
    line = line.replace(/^(?:[*_`~]+|\d+\.\s+|[-+*]\s+)/, ''); // emphasis / list
    line = line.trimStart();
    if (line) return line[0];
  }
  return '';
}

/** True when the given character is an actual letter (Unicode-aware, so
 *  accented characters like «Á» count), rather than a symbol such as an em
 *  dash «—», a quote «"», etc. Used to decide whether to apply the drop cap. */
function isLetter(char: string): boolean {
  return !!char && /\p{L}/u.test(char);
}

/** Renders a letter's markdown body, mapping our content conventions
 *  (data-biblical/data-ref blockquotes, `## ` headings, `---` dividers)
 *  onto the same visual language the old structured content blocks used.
 *
 *  Any `<div data-conversation>` block is lifted out of the markdown stream and
 *  rendered by {@link AiConversation} in its own styled container. */
function LetterBody({
  body,
  styles,
  headings,
}: {
  body: string;
  styles: StyleScale;
  headings: TocHeading[];
}) {
  const paragraphIndex = useRef(0);
  paragraphIndex.current = 0;

  // Map each heading slug to the ordered list of ids the table of contents
  // uses (a slug maps to more than one id only when the same heading text
  // repeats in the letter). Computed purely from the precomputed `headings`, so
  // it never depends on render-time mutation.
  const idsBySlug = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const h of headings) {
      const slug = slugifyHeading(h.text);
      const list = map.get(slug);
      if (list) list.push(h.id);
      else map.set(slug, [h.id]);
    }
    return map;
  }, [headings]);

  // Per-render occurrence counter, used ONLY to disambiguate repeated heading
  // texts. A fresh Map is created on every render pass (including StrictMode's
  // double render), so the counting is deterministic within a single pass.
  const occurrenceRef = useRef<Map<string, number>>(new Map());
  occurrenceRef.current = new Map();

  const resolveHeadingId = (children: React.ReactNode): string => {
    const text = nodeToText(children).replace(/\s+/g, ' ').trim();
    const slug = slugifyHeading(text);
    const ids = idsBySlug.get(slug);

    // No precomputed match (shouldn't happen for real content): use the slug.
    if (!ids || ids.length === 0) return slug || 'seccion';

    // Unique slug: return its id directly — no counter, fully stable.
    if (ids.length === 1) return ids[0];

    // Repeated text: pick the next id in order for this slug.
    const seen = occurrenceRef.current.get(slug) ?? 0;
    occurrenceRef.current.set(slug, seen + 1);
    return ids[Math.min(seen, ids.length - 1)];
  };

  // Decide once, from the raw markdown, whether the letter opens with a real
  // letter. If it opens with a symbol (e.g. the dialogue em dash «—»), we skip
  // the drop cap so we never float a giant punctuation mark. This is computed
  // from the source text so it behaves identically in dev and on GitHub Pages.
  const bodyStartsWithLetter = isLetter(firstVisibleChar(body));

  const markdownComponents = {
    p: ({ children }: { children?: React.ReactNode }) => {
      const isFirstParagraph = paragraphIndex.current === 0;
      paragraphIndex.current += 1;
      // Only apply the drop cap on the first paragraph AND only when the
      // letter's first visible character is an actual letter.
      const applyDropCap = isFirstParagraph && bodyStartsWithLetter;
      return (
        <p
          className={`${styles.p} ${
            applyDropCap ? 'drop-cap' : ''
          } mb-7 text-justify sm:text-left text-[#2b2725] dark:text-[#e4ded6] font-light`}
        >
          {children}
        </p>
      );
    },
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-[#1a1714] dark:text-[#f4efe8]">
        {children}
      </strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    mark: ({ children }: { children?: React.ReactNode }) => (
      <mark className="bg-[#f2d9a0]/60 dark:bg-[#cfa152]/25 text-[#211e1c] dark:text-[#ede7e0] px-1 rounded-xs">
        {children}
      </mark>
    ),
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1
        className={`font-serif ${styles.h} font-semibold text-[#211e1c] dark:text-[#ede7e0] tracking-tight border-b border-[#dad4cb]/40 dark:border-[#383633]/40 pb-2`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2
        id={resolveHeadingId(children)}
        className={`scroll-mt-24 font-serif ${styles.h} font-semibold text-[#211e1c] dark:text-[#ede7e0] tracking-tight border-b border-[#dad4cb]/40 dark:border-[#383633]/40 pb-2`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3
        id={resolveHeadingId(children)}
        className={`scroll-mt-24 font-serif ${styles.quote} font-semibold text-[#211e1c] dark:text-[#ede7e0] tracking-tight mt-10 mb-6`}
      >
        {children}
      </h3>
    ),
    blockquote: (props: Record<string, unknown> & { children?: React.ReactNode }) => (
      <Quote
        text={typeof props.children === 'string' ? props.children.trim() : String(props.children ?? '')}
        reference={typeof props['data-ref'] === 'string' ? props['data-ref'] : undefined}
        isBiblical={props['data-biblical'] === true || props['data-biblical'] === 'true'}
      />
    ),
    hr: () => (
      <div className="my-12 text-center text-[#8c8479] dark:text-[#7d756a] tracking-[0.4em]">
        * * *
      </div>
    ),
  };

  const segments = splitBodyIntoSegments(body);

  return (
    <>
      {segments.map((segment, index) =>
        segment.kind === 'conversation' ? (
          <AiConversation key={index} turns={segment.turns} source={segment.source} />
        ) : (
          <ReactMarkdown
            key={index}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {segment.content}
          </ReactMarkdown>
        )
      )}
    </>
  );
}

interface LetterDetailViewProps {
  letter: Letter;
  allLetters: Letter[];
  onBackToArchive: () => void;
  onSelectCategory: (category: string) => void;
  onSelectLetter: (letter: Letter) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  fontSize: FontSizeScale;
  onChangeFontSize: (size: FontSizeScale) => void;
  isFocusMode: boolean;
  onToggleFocusMode: () => void;
}

export const LetterDetailView: React.FC<LetterDetailViewProps> = ({
  letter,
  allLetters,
  onBackToArchive,
  onSelectCategory,
  onSelectLetter,
  theme,
  onToggleTheme,
  fontSize,
  onChangeFontSize,
  isFocusMode,
  onToggleFocusMode,
}) => {
  const [copied, setCopied] = useState(false);

  // Section outline derived from the letter's `## / ###` headings. Recomputed
  // only when the letter changes; shared with the table-of-contents component.
  const headings = useMemo(() => extractHeadings(letter.body), [letter.body]);

  // Starting point for this reading session. A letter already marked fully
  // read resets to 0 here (once per slug) so re-reading it tracks the new
  // pass instead of staying stuck showing "Leída" everywhere.
  const initialProgress = useMemo(() => beginLetterSession(letter.slug), [letter.slug]);

  // "Seguir leyendo": resume roughly where the reader left off in this letter
  // instead of always jumping to the top. Skipped for letters barely started
  // or already finished, where starting from the top makes more sense.
  useEffect(() => {
    const shouldResume = initialProgress > 3 && initialProgress < READING_COMPLETE_THRESHOLD;

    if (!shouldResume) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Wait for the new letter's content to lay out so scrollHeight reflects
    // this letter, not whatever was previously on screen.
    const frame = requestAnimationFrame(() => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        window.scrollTo({ top: (initialProgress / 100) * totalHeight, behavior: 'instant' });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [letter.slug, initialProgress]);

  // Find previous and next letters in chronological/archive order
  const currentIndex = allLetters.findIndex((l) => l.slug === letter.slug);
  const prevLetter = currentIndex > 0 ? allLetters[currentIndex - 1] : null;
  const nextLetter = currentIndex < allLetters.length - 1 ? allLetters[currentIndex + 1] : null;

  // Font size classes for body text
  const fontSizeClasses: Record<FontSizeScale, { p: string; h: string; quote: string }> = {
    sm: {
      p: 'text-base sm:text-[17px] leading-[1.8]',
      h: 'text-xl sm:text-2xl mt-12 mb-5',
      quote: 'text-lg sm:text-xl leading-relaxed',
    },
    base: {
      p: 'text-[18px] sm:text-[20px] leading-[1.85]',
      h: 'text-2xl sm:text-3xl mt-14 mb-6',
      quote: 'text-xl sm:text-2xl leading-relaxed',
    },
    lg: {
      p: 'text-[21px] sm:text-[23px] leading-[1.9]',
      h: 'text-2xl sm:text-3xl mt-16 mb-7',
      quote: 'text-2xl sm:text-3xl leading-relaxed',
    },
    xl: {
      p: 'text-[24px] sm:text-[26px] leading-[1.95]',
      h: 'text-3xl sm:text-4xl mt-18 mb-8',
      quote: 'text-2xl sm:text-3xl leading-relaxed',
    },
  };

  const currentStyles = fontSizeClasses[fontSize];

  /** Copies the current URL and briefly shows the "Enlace copiado" feedback.
   *  Uses the async Clipboard API when available and falls back to a legacy
   *  execCommand approach for older/insecure contexts. */
  const copyLink = async () => {
    const url = window.location.href;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      /* ignore: clipboard permission denied or unsupported */
    }
  };

  const handleShare = async () => {
    // Detect coarse-pointer (touch) devices. On mobile we keep the native
    // share sheet; on desktop `navigator.share` is unreliable (present but
    // silently failing on some browsers), so we always copy the link instead.
    const isMobile =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(pointer: coarse)').matches;

    if (isMobile && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: `${letter.title} — Cartas que quedan`,
          text: letter.excerpt,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // User cancelled the share sheet: do nothing. Any other failure falls
        // through to copying the link so the action is never a dead end.
        if (err instanceof DOMException && err.name === 'AbortError') return;
      }
    }

    await copyLink();
  };

  return (
    <article className={`w-full relative pb-28 ${isFocusMode ? 'pt-10 sm:pt-14' : ''}`}>
      {/* Discreet Reading Progress Bar */}
      <ReadingProgress slug={letter.slug} initialProgress={initialProgress} />

      {/* In-letter section outline (hidden in focus mode for pure reading) */}
      {!isFocusMode && <TableOfContents headings={headings} title={letter.title} />}

      {/* Floating Action Button: reading controls anchored to the bottom-right */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-none">
        <div className="pointer-events-auto bg-[#ece9e4]/95 dark:bg-[#1c1b1b]/95 p-1 rounded-full shadow-lg ring-1 ring-[#dad4cb]/60 dark:ring-[#383633]/60 backdrop-blur-xs">
          <ReadingControls
            fontSize={fontSize}
            onChangeFontSize={onChangeFontSize}
            theme={theme}
            onToggleTheme={onToggleTheme}
            isFocusMode={isFocusMode}
            onToggleFocusMode={onToggleFocusMode}
          />
        </div>
      </div>

      {/* Main Reading Column: max-w ~ 680px - 720px for optimal human reading */}
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        {/* Navigation back (hidden in focus mode to leave pure reading) */}
        {!isFocusMode && (
          <nav className="mb-10 sm:mb-14">
            <button
              onClick={onBackToArchive}
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Volver al archivo</span>
            </button>
          </nav>
        )}

        {/* Letter Header */}
        <header id="letter-top" className="scroll-mt-24 mb-12 sm:mb-16">
          {/* Metadata Row: Index, Category, Year */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans pb-4 border-b border-[#dad4cb]/70 dark:border-[#383633]/70">
            <div className="flex items-center gap-3">
              {/* 
              <span className="font-serif text-sm text-[#8c8479] dark:text-[#7d756a]">
                Documento {letter.indexNumber}
              </span>
              <span className="text-[#dad4cb] dark:text-[#383633]">·</span>
              */}
              <CategoryBadge
                category={letter.category}
                secondaryCategory={letter.secondaryCategory}
                onClick={onSelectCategory}
              />
            </div>

            <div className="flex items-center gap-3 text-[#8c8479] dark:text-[#7d756a]">
              <span>{letter.formattedDate}</span>
              <span>·</span>
              <span>{letter.readingTime}</span>
            </div>
          </div>

          {/* Letter Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#211e1c] dark:text-[#ede7e0] tracking-tight leading-[1.2] mt-8">
            {letter.title}
          </h1>

          {/* Excerpt / Epigraph */}
          <p className="font-serif text-lg sm:text-xl text-[#5d4837] dark:text-[#cfa152] font-normal italic mt-6 leading-relaxed font-light">
            «{letter.excerpt}»
          </p>

          {/* Tags list (discreet) */}
          {!isFocusMode && letter.tags && letter.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {letter.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[11px] px-2 py-0.5 rounded-xs bg-[#f5f1ec] dark:bg-[#242321] text-[#6b645c] dark:text-[#9c958c] border border-[#dad4cb]/60 dark:border-[#383633]/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Letter Body Content */}
        <section
          id="letter-reading-body"
          className="font-serif text-[#211e1c] dark:text-[#ede7e0] font-normal transition-all"
        >
          <LetterBody body={letter.body} styles={currentStyles} headings={headings} />
        </section>

        {/* Colophon of the Letter */}
        <div className="mt-16 pt-8 border-t border-[#dad4cb] dark:border-[#383633] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-xs text-[#8c8479] dark:text-[#7d756a]">
          <div className="flex items-center gap-2">
            <Bookmark className="w-3.5 h-3.5 text-[#b84e2a] dark:text-[#cf6e4b]" />
            <span>Conservado en el archivo de «Cartas que quedan» · {letter.year}</span>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-[#6b645c] dark:text-[#9c958c] hover:text-[#b84e2a] dark:hover:text-[#cf6e4b] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#b84e2a]" />
                <span>Enlace copiado</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartir carta</span>
              </>
            )}
          </button>
        </div>

        {/* Previous and Next letter pagination (hidden in focus mode) */}
        {!isFocusMode && (
          <nav
            id="letter-pagination"
            aria-label="Navegación entre cartas"
            className="mt-16 pt-10 border-t border-[#dad4cb] dark:border-[#383633] grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {prevLetter ? (
              <button
                type="button"
                onClick={() => onSelectLetter(prevLetter)}
                className="group text-left p-4 border border-[#dad4cb] dark:border-[#383633] hover:border-[#b84e2a] dark:hover:border-[#cf6e4b] rounded-xs transition-colors bg-[#f5f1ec]/50 dark:bg-[#242321]/50"
              >
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#8c8479] dark:text-[#7d756a] inline-flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Carta anterior</span>
                </span>
                <p className="font-serif text-base text-[#211e1c] dark:text-[#ede7e0] font-normal mt-1 line-clamp-1 group-hover:text-[#b84e2a] dark:group-hover:text-[#cf6e4b] transition-colors">
                  {prevLetter.title}
                </p>
              </button>
            ) : (
              <div />
            )}

            {nextLetter ? (
              <button
                type="button"
                onClick={() => onSelectLetter(nextLetter)}
                className="group text-right p-4 border border-[#dad4cb] dark:border-[#383633] hover:border-[#b84e2a] dark:hover:border-[#cf6e4b] rounded-xs transition-colors bg-[#f5f1ec]/50 dark:bg-[#242321]/50 sm:col-start-2"
              >
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#8c8479] dark:text-[#7d756a] inline-flex items-center gap-1 justify-end">
                  <span>Siguiente carta</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <p className="font-serif text-base text-[#211e1c] dark:text-[#ede7e0] font-normal mt-1 line-clamp-1 group-hover:text-[#b84e2a] dark:group-hover:text-[#cf6e4b] transition-colors">
                  {nextLetter.title}
                </p>
              </button>
            ) : (
              <div />
            )}
          </nav>
        )}
      </div>
    </article>
  );
};
