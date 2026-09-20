import React, { useCallback, useEffect, useState } from 'react';
import { List, X } from 'lucide-react';
import { TocHeading } from '../utils/toc';

interface TableOfContentsProps {
  headings: TocHeading[];
  /** Letter title, shown as the first entry linking back to the top. */
  title: string;
}

/** DOM id of the letter header, used as the "top" anchor for the title entry. */
const TOP_ID = 'letter-top';

/** DOM id of the site footer, used to know when the pinned outline is about to
 *  overlap it so we can slide the outline up along with the page. */
const FOOTER_ID = 'main-footer';

/** Distance (px) kept between the bottom of the pinned outline and the top of
 *  the footer once they meet, so the outline never touches the footer. */
const FOOTER_GAP = 24;

/** Vertical offset (px) applied when jumping to a section, so the heading
 *  lands a little below the top edge instead of flush against it. Matches the
 *  `scroll-mt` used on the headings themselves. */
const SCROLL_OFFSET = 96;

/** Smoothly scrolls to a section heading (accounting for the top offset) and
 *  updates the URL fragment for shareable deep links. */
function scrollToHeading(id: string) {
  // The title entry scrolls all the way to the top of the page.
  if (id === TOP_ID) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  // Prefer scrollIntoView so the browser honours each heading's `scroll-mt`
  // (scroll-margin-top). Fall back to a manual offset scroll if unavailable.
  if (typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  if (window.history.replaceState) {
    window.history.replaceState(null, '', `#${id}`);
  }
}

/** Tracks the section currently being read by comparing each heading's
 *  position against the scroll offset. Robust against long sections where no
 *  heading sits inside a narrow observer band. */
function useActiveHeading(headings: TocHeading[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(
    headings[0]?.id ?? null,
  );

  useEffect(() => {
    if (headings.length === 0) return;

    let frame = 0;

    const computeActive = () => {
      frame = 0;

      // "Reading line": a point a little below the top of the viewport. The
      // active section is the last heading that sits at or above this line.
      const line = window.scrollY + SCROLL_OFFSET + 8;

      // Collect the live top position of every heading. We DON'T rely on the
      // headings being in perfect top-order (font changes, images and reflows
      // can perturb it), so we pick the best candidate by comparing positions
      // rather than breaking out of the loop at the first miss.
      let current: string | null = headings[0]?.id ?? null;
      let bestTop = -Infinity;

      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        // Among all headings at or above the reading line, keep the lowest one
        // (largest top) — that's the section the reader is currently within.
        if (top <= line && top >= bestTop) {
          bestTop = top;
          current = h.id;
        }
      }

      // Near the very bottom, force the last section active so it can highlight
      // even if its heading never crosses the line on short final sections.
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (nearBottom) current = headings[headings.length - 1]?.id ?? current;

      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(computeActive);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    // Initial computation once the DOM (and heading positions) are ready.
    computeActive();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [headings]);

  return activeId;
}

/** Keeps the pinned (xl+) outline from overlapping the footer. The outline is
 *  `position: fixed` at a set distance from the top of the viewport, so on its
 *  own it would happily float on top of the footer at the end of the page.
 *
 *  This measures how far the footer has risen into the viewport and, once it
 *  would cross the outline's bottom edge, returns the number of pixels to shift
 *  the outline upward (as a negative `translateY`). The effect is that the
 *  outline stays pinned while reading, then slides up together with the footer
 *  instead of sitting over it. */
function useFooterAwareOffset(navRef: React.RefObject<HTMLElement | null>): number {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const nav = navRef.current;
      const footer = document.getElementById(FOOTER_ID);
      if (!nav || !footer) {
        setOffset((prev) => (prev === 0 ? prev : 0));
        return;
      }

      // Viewport top of the footer, and the outline's *pinned* bottom edge —
      // i.e. its current bottom minus whatever translateY we've already applied,
      // so the measurement reflects the untransformed (pinned) position.
      const currentTranslate = getTranslateY(nav);
      const pinnedBottom = nav.getBoundingClientRect().bottom - currentTranslate;
      const footerTop = footer.getBoundingClientRect().top;

      // Overlap (or imminent overlap) between the outline and the footer.
      const overlap = pinnedBottom + FOOTER_GAP - footerTop;
      const next = overlap > 0 ? -overlap : 0;

      setOffset((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(compute);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    compute();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [navRef]);

  return offset;
}

/** Reads the current translateY (px) applied to an element via inline
 *  transform, so we can subtract it and recover the element's unshifted
 *  position. Returns 0 when there is no vertical translate. */
function getTranslateY(el: HTMLElement): number {
  const t = el.style.transform;
  if (!t) return 0;
  const match = t.match(/translateY\((-?[\d.]+)px\)/);
  return match ? parseFloat(match[1]) : 0;
}

/**
 * In-letter table of contents. On very wide screens it stays pinned to the side
 * as a quiet outline; otherwise it collapses into a floating button that opens
 * a bottom sheet. Selecting an entry jumps to that section, and the active
 * section is highlighted as the reader scrolls.
 */
export const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
  title,
}) => {
  // Only render when the letter is long enough to have a real outline.
  const hasOutline = headings.length >= 2;

  // Prepend a synthetic entry for the letter title that links to the very top.
  const entries: TocHeading[] = React.useMemo(
    () =>
      hasOutline
        ? [{ id: TOP_ID, text: title, level: 2 as const }, ...headings]
        : [],
    [hasOutline, title, headings],
  );

  const activeId = useActiveHeading(entries);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Ref + offset that keep the pinned (xl+) outline from overlapping the footer.
  const navRef = React.useRef<HTMLElement | null>(null);
  const footerOffset = useFooterAwareOffset(navRef);

  const handleSelect = useCallback((id: string) => {
    scrollToHeading(id);
    setMobileOpen(false);
  }, []);

  if (!hasOutline) return null;

  const list = (
    <ul className="space-y-1">
      {entries.map((h) => {
        const isActive = h.id === activeId;
        const isTop = h.id === TOP_ID;
        return (
          <li key={h.id} className={isTop ? 'mb-1' : undefined}>
            <button
              type="button"
              onClick={() => handleSelect(h.id)}
              aria-current={isActive ? 'true' : undefined}
              className={`block w-full text-left font-sans leading-snug transition-colors border-l-2 -ml-px py-1 line-clamp-2 ${
                h.level === 3 ? 'pl-6 text-[12px]' : 'pl-3 text-[13px]'
              } ${isTop ? 'font-serif font-medium' : ''} ${
                isActive
                  ? 'border-[#b84e2a] dark:border-[#cf6e4b] text-[#b84e2a] dark:text-[#cf6e4b] font-medium'
                  : 'border-transparent text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] hover:border-[#dad4cb] dark:hover:border-[#383633]'
              }`}
            >
              {h.text}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Wide screens (xl+): pinned outline whose left edge is anchored just to
          the right of the centred 720px reading column, so it never overlaps
          the prose. Shown only where there's room for it. */}
      <nav
        ref={navRef}
        aria-label="Índice de la carta"
        style={{
          transform: footerOffset ? `translateY(${footerOffset}px)` : undefined,
        }}
        className="hidden xl:block fixed top-28 left-[calc(50%+384px)] w-[min(15rem,calc(50%-384px-1rem))] max-h-[70vh] overflow-y-auto z-30 will-change-transform"
      >
        <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#8c8479] dark:text-[#7d756a] mb-3 pl-3">
          En esta carta
        </p>
        <div className="border-l border-[#dad4cb]/60 dark:border-[#383633]/60">
          {list}
        </div>
      </nav>

      {/* Everything below xl: floating button that opens a bottom sheet. */}
      <div className="xl:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir índice de la carta"
          className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-[#ece9e4]/95 dark:bg-[#1c1b1b]/95 shadow-lg ring-1 ring-[#dad4cb]/60 dark:ring-[#383633]/60 backdrop-blur-xs text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors"
        >
          <List className="w-4 h-4" strokeWidth={1.75} />
          <span className="font-sans text-xs uppercase tracking-wider">Índice</span>
        </button>

        {mobileOpen && (
          <div
            className="fixed inset-0 z-50 flex flex-col justify-end"
            role="dialog"
            aria-modal="true"
            aria-label="Índice de la carta"
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Cerrar índice"
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-black/40 dark:bg-black/60"
            />

            {/* Sheet */}
            <div className="relative bg-[#f5f1ec] dark:bg-[#201f1d] rounded-t-2xl shadow-2xl max-h-[75vh] overflow-y-auto pb-[env(safe-area-inset-bottom)]">
              <div className="sticky top-0 flex items-center justify-between px-5 py-4 bg-[#f5f1ec] dark:bg-[#201f1d] border-b border-[#dad4cb]/70 dark:border-[#383633]/70">
                <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#8c8479] dark:text-[#7d756a]">
                  En esta carta
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Cerrar índice"
                  className="text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-4 py-4">{list}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
