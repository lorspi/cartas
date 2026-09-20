/** Persists how far into each letter the reader has scrolled, so cards in the
 *  home/archive lists can show a "continue reading" progress bar and the
 *  letter view itself can resume roughly where the reader left off.
 *
 *  Stored as a single JSON map (slug -> percentage 0-100) under one
 *  localStorage key, following the same convention as the theme/font-size
 *  settings in `App.tsx`. Progress only ever moves forward: scrolling back up
 *  never erases how far the reader already got. */

const STORAGE_KEY = 'cartas_que_quedan_reading_progress';

type ProgressMap = Record<string, number>;

/** A letter counts as fully read once the bar would visually look full; this
 *  avoids requiring the reader to scroll the very last pixel (footer
 *  margins, etc.) to hit 100. */
export const READING_COMPLETE_THRESHOLD = 98;

function readAll(): ProgressMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    return parsed && typeof parsed === 'object' ? (parsed as ProgressMap) : {};
  } catch {
    return {};
  }
}

/** Returns the highest reading percentage (0-100) recorded for this letter. */
export function getReadingProgress(slug: string): number {
  const value = readAll()[slug];
  return typeof value === 'number' && Number.isFinite(value)
    ? Math.min(100, Math.max(0, value))
    : 0;
}

/** Records a new reading percentage for this letter, only if it advances the
 *  reader's furthest known point. Silently ignored outside the browser or if
 *  storage is unavailable (private browsing, quota, etc.). */
export function setReadingProgress(slug: string, percentage: number): void {
  if (typeof window === 'undefined' || !slug) return;
  const clamped = Math.min(100, Math.max(0, Math.round(percentage)));
  const all = readAll();
  if ((all[slug] ?? 0) >= clamped) return;

  all[slug] = clamped;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* ignore: private browsing / storage quota */
  }
}

/** Forgets the saved progress for a letter. */
export function clearReadingProgress(slug: string): void {
  if (typeof window === 'undefined' || !slug) return;
  const all = readAll();
  if (!(slug in all)) return;

  delete all[slug];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* ignore: private browsing / storage quota */
  }
}

/** Call once when a letter's detail page is opened. A letter already marked
 *  fully read starts a fresh reading session (progress resets to 0) so
 *  re-reading it tracks the new pass instead of staying stuck at "Leída".
 *  Otherwise returns the reader's existing progress unchanged, so reopening a
 *  partially-read letter still resumes where they left off. */
export function beginLetterSession(slug: string): number {
  const current = getReadingProgress(slug);
  if (current < READING_COMPLETE_THRESHOLD) return current;

  clearReadingProgress(slug);
  return 0;
}
