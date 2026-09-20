/** Persists how far into each letter the reader has scrolled, so cards in the
 *  home/archive lists can show a "continue reading" progress bar and the
 *  letter view itself can resume exactly where the reader left off.
 *
 *  Two things are tracked per letter:
 *   - `position`: the reader's CURRENT scroll position (0-100). It moves both
 *     ways — forward when scrolling down, backward when scrolling up — so
 *     reopening a letter returns the reader to wherever they actually left off.
 *   - `completed`: whether the letter was ever read to the end. This is sticky
 *     (scrolling back up afterwards doesn't unset it) so the "Leída" badge and
 *     the fresh-session reset keep working even though `position` can recede.
 *
 *  Stored as a single JSON map under one localStorage key, following the same
 *  convention as the theme/font-size settings in `App.tsx`. Legacy entries that
 *  were saved as a plain number are still understood and upgraded on read. */

const STORAGE_KEY = 'cartas_que_quedan_reading_progress';

/** Per-letter reading record. */
interface ProgressEntry {
  /** Reader's current scroll position, 0-100. Moves forward and backward. */
  position: number;
  /** True once the letter has been read to (near) the end at least once. */
  completed: boolean;
}

type StoredValue = number | ProgressEntry;
type StoredMap = Record<string, StoredValue>;
type ProgressMap = Record<string, ProgressEntry>;

/** A letter counts as fully read once the bar would visually look full; this
 *  avoids requiring the reader to scroll the very last pixel (footer
 *  margins, etc.) to hit 100. */
export const READING_COMPLETE_THRESHOLD = 98;

/** Normalizes a stored value (legacy number or entry) into a ProgressEntry. */
function toEntry(value: StoredValue | undefined): ProgressEntry {
  if (typeof value === 'number' && Number.isFinite(value)) {
    const clamped = Math.min(100, Math.max(0, value));
    // A legacy number only recorded the furthest point reached, so treat it as
    // completed when it had crossed the threshold.
    return { position: clamped, completed: clamped >= READING_COMPLETE_THRESHOLD };
  }
  if (value && typeof value === 'object') {
    const position =
      typeof value.position === 'number' && Number.isFinite(value.position)
        ? Math.min(100, Math.max(0, value.position))
        : 0;
    return { position, completed: value.completed === true };
  }
  return { position: 0, completed: false };
}

function readAll(): ProgressMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') return {};
    const out: ProgressMap = {};
    for (const [slug, value] of Object.entries(parsed as StoredMap)) {
      out[slug] = toEntry(value);
    }
    return out;
  } catch {
    return {};
  }
}

function writeAll(all: ProgressMap): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* ignore: private browsing / storage quota */
  }
}

/** Returns the reader's current recorded position (0-100) for this letter. */
export function getReadingProgress(slug: string): number {
  return readAll()[slug]?.position ?? 0;
}

/** Whether this letter has ever been read to the end. */
export function isLetterCompleted(slug: string): boolean {
  return readAll()[slug]?.completed ?? false;
}

/** Records the reader's CURRENT position for this letter. Unlike before, this
 *  moves both ways: scrolling back up lowers the saved position so reopening
 *  the letter resumes exactly where the reader left off. The `completed` flag
 *  is sticky — once the reader reaches the end it stays set even if they then
 *  scroll back up. Silently ignored outside the browser or if storage is
 *  unavailable (private browsing, quota, etc.). */
export function setReadingProgress(slug: string, percentage: number): void {
  if (typeof window === 'undefined' || !slug) return;
  const clamped = Math.min(100, Math.max(0, Math.round(percentage)));
  const all = readAll();
  const prev = all[slug] ?? { position: 0, completed: false };

  const completed = prev.completed || clamped >= READING_COMPLETE_THRESHOLD;
  if (prev.position === clamped && prev.completed === completed) return;

  all[slug] = { position: clamped, completed };
  writeAll(all);
}

/** Forgets the saved progress for a letter. */
export function clearReadingProgress(slug: string): void {
  if (typeof window === 'undefined' || !slug) return;
  const all = readAll();
  if (!(slug in all)) return;

  delete all[slug];
  writeAll(all);
}

/** Call once when a letter's detail page is opened. A letter already read to
 *  the end starts a fresh reading session (progress resets to 0) so re-reading
 *  it tracks the new pass instead of staying stuck showing "Leída". Otherwise
 *  returns the reader's existing position unchanged, so reopening a
 *  partially-read letter resumes where they left off. */
export function beginLetterSession(slug: string): number {
  if (isLetterCompleted(slug)) {
    clearReadingProgress(slug);
    return 0;
  }
  return getReadingProgress(slug);
}
