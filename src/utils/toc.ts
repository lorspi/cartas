// ---------------------------------------------------------------------------
// Table-of-contents helpers
// Extracts the section headings (`## `, `### `) from a letter's markdown body
// and derives stable, URL-friendly slug IDs for anchor navigation.
// ---------------------------------------------------------------------------

export interface TocHeading {
  /** Stable id used both as the element `id` and the fragment target. */
  id: string;
  /** Visible heading text (markdown/inline syntax stripped). */
  text: string;
  /** Heading depth: 2 for `##`, 3 for `###`. */
  level: 2 | 3;
}

/** Turns visible heading text into a URL-friendly slug (accent-aware). */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics
    .replace(/[^a-z0-9\s-]/g, '') // drop punctuation
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Removes inline markdown/HTML so a heading reads as plain text. */
function stripInline(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, '') // HTML tags
    .replace(/`([^`]*)`/g, '$1') // inline code
    .replace(/\*\*([^*]*)\*\*/g, '$1') // bold
    .replace(/\*([^*]*)\*/g, '$1') // italic
    .replace(/_([^_]*)_/g, '$1') // italic (underscore)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links → text
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extracts `##`/`###` headings from a markdown body, in document order, with
 * ids that are unique within the document (duplicate slugs get a numeric
 * suffix). Fenced code blocks are ignored so `#` lines inside them don't leak
 * into the outline.
 */
export function extractHeadings(body: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const seen = new Map<string, number>();
  let inFence = false;

  for (const rawLine of body.split(/\r?\n/)) {
    const line = rawLine.trimEnd();

    // Toggle fenced code blocks (``` or ~~~) so we skip their contents.
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;

    const level = match[1].length as 2 | 3;
    const text = stripInline(match[2]);
    if (!text) continue;

    let id = slugifyHeading(text);
    if (!id) id = `seccion-${headings.length + 1}`;

    // Guarantee uniqueness across the document.
    if (seen.has(id)) {
      const next = (seen.get(id) ?? 0) + 1;
      seen.set(id, next);
      id = `${id}-${next}`;
    } else {
      seen.set(id, 0);
    }

    headings.push({ id, text, level });
  }

  return headings;
}
