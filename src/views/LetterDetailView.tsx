import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, Share2, Check, Bookmark } from 'lucide-react';
import { Letter, ThemeMode, FontSizeScale } from '../types';
import { ReadingControls } from '../components/ReadingControls';
import { ReadingProgress } from '../components/ReadingProgress';
import { CategoryBadge } from '../components/CategoryBadge';
import { Quote } from '../components/Quote';

type StyleScale = { p: string; h: string; quote: string };

/** Renders a letter's markdown body, mapping our content conventions
 *  (data-biblical/data-ref blockquotes, `## ` headings, `---` dividers)
 *  onto the same visual language the old structured content blocks used. */
function LetterBody({ body, styles }: { body: string; styles: StyleScale }) {
  const paragraphIndex = useRef(0);
  paragraphIndex.current = 0;

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => {
          const isFirstParagraph = paragraphIndex.current === 0;
          paragraphIndex.current += 1;
          return (
            <p
              className={`${styles.p} ${
                isFirstParagraph ? 'drop-cap' : ''
              } mb-7 text-justify sm:text-left text-[#2b2725] dark:text-[#e4ded6] font-light`}
            >
              {children}
            </p>
          );
        },
        strong: ({ children }) => (
          <strong className="font-bold text-[#1a1714] dark:text-[#f4efe8]">
            {children}
          </strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        mark: ({ children }) => (
          <mark className="bg-[#f2d9a0]/60 dark:bg-[#cfa152]/25 text-[#211e1c] dark:text-[#ede7e0] px-1 rounded-xs">
            {children}
          </mark>
        ),
        h1: ({ children }) => (
          <h1
            className={`font-serif ${styles.h} font-semibold text-[#211e1c] dark:text-[#ede7e0] tracking-tight border-b border-[#dad4cb]/40 dark:border-[#383633]/40 pb-2`}
          >
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2
            className={`font-serif ${styles.h} font-semibold text-[#211e1c] dark:text-[#ede7e0] tracking-tight border-b border-[#dad4cb]/40 dark:border-[#383633]/40 pb-2`}
          >
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3
            className={`font-serif ${styles.quote} font-semibold text-[#211e1c] dark:text-[#ede7e0] tracking-tight mt-10 mb-6`}
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
      }}
    >
      {body}
    </ReactMarkdown>
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
}) => {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Scroll to top when letter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [letter.slug]);

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

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${letter.title} — Cartas que quedan`,
          text: letter.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      }
    } catch {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <article className="w-full relative pb-28">
      {/* Discreet Reading Progress Bar */}
      <ReadingProgress />

      {/* Floating / Sticky Reading Controls bar */}
      <div className="sticky top-20 z-30 flex justify-end mb-4 pointer-events-none">
        <div className="pointer-events-auto bg-[#ece9e4]/95 dark:bg-[#1c1b1b]/95 p-1 rounded-sm shadow-xs backdrop-blur-xs">
          <ReadingControls
            fontSize={fontSize}
            onChangeFontSize={onChangeFontSize}
            theme={theme}
            onToggleTheme={onToggleTheme}
            isFocusMode={isFocusMode}
            onToggleFocusMode={() => setIsFocusMode(!isFocusMode)}
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
        <header className="mb-12 sm:mb-16">
          {/* Metadata Row: Index, Category, Year */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans pb-4 border-b border-[#dad4cb]/70 dark:border-[#383633]/70">
            <div className="flex items-center gap-3">
              <span className="font-serif text-sm text-[#8c8479] dark:text-[#7d756a]">
                Documento {letter.indexNumber}
              </span>
              <span className="text-[#dad4cb] dark:text-[#383633]">·</span>
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
          <LetterBody body={letter.body} styles={currentStyles} />
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
