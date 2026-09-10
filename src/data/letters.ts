// ---------------------------------------------------------------------------
// Dynamic letter loader — discovers content from src/contenido/<slug>/carta.md
// Markdown files with YAML-ish frontmatter. No central manifest needed.
// ---------------------------------------------------------------------------

import { Letter, Category } from '../types';

// ---------- helpers -------------------------------------------------------

function parseFrontmatter(raw: string): {
  meta: Record<string, string>;
  body: string;
} {
  const meta: Record<string, string> = {};

  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta, body: raw.trim() };

  const yaml = match[1];
  const body = match[2].trim();

  for (const line of yaml.split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    meta[key] = val;
  }

  return { meta, body };
}

/**
 * Replace relative image references (./filename.ext) in the markdown body
 * with the absolute Vite-resolved URLs.
 *
 * Handles both markdown syntax `![alt](./file.jpg)` and
 * HTML `<img src="./file.jpg">` / `<source srcset="./file.jpg">`.
 */
function resolveImages(body: string, images: Map<string, string>): string {
  if (images.size === 0) return body;

  const lookup = (src: string): string => {
    const cleaned = src.replace(/^\.\//, '');
    return images.get(cleaned) ?? src;
  };

  let result = body.replace(
    /(!\[.*?\]\()(\.\/[^)\s]+)(\))/g,
    (_, prefix, src, suffix) => `${prefix}${lookup(src)}${suffix}`,
  );

  result = result.replace(
    /(src|srcset)=["'](\.\/[^"']+)["']/gi,
    (_, attr, value) => `${attr}="${lookup(value)}"`,
  );

  return result;
}

/** Rough word count used only to order the archive by "shortest read first". */
function countWords(markdown: string): number {
  const plain = markdown
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~-]/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ');
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  if (!y || !m || !d) return dateStr;
  return new Date(y, m - 1, d).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// ---------- glob loading ----------------------------------------------------

// Keys look like: /src/contenido/<slug>/carta.md
const contentFiles = import.meta.glob<string>('/src/contenido/*/carta.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

// Static assets living alongside a letter's carta.md (optional, e.g. covers)
const assetFiles = import.meta.glob<{ default: string }>(
  '/src/contenido/**/*.{jpg,jpeg,png,gif,webp,svg,mp4,webm}',
  { eager: true },
);

/** Build a lookup: slug → image filename → resolved URL */
function buildImageMap(): Map<string, Map<string, string>> {
  const map = new Map<string, Map<string, string>>();

  for (const [absPath, mod] of Object.entries(assetFiles)) {
    const parts = absPath.replace(/\\/g, '/').split('/');
    const slug = parts[3];
    const filename = parts.slice(4).join('/');

    if (!slug || !filename) continue;
    if (!map.has(slug)) map.set(slug, new Map());
    map.get(slug)!.set(filename, (mod as { default: string }).default);
  }

  return map;
}

const imageBySlug = buildImageMap();

function buildLetters(): Letter[] {
  const drafts: Omit<Letter, 'indexNumber'>[] = [];

  for (const [filePath, raw] of Object.entries(contentFiles)) {
    const parts = filePath.replace(/\\/g, '/').split('/');
    const slug = parts[3];
    if (!slug) continue;

    const { meta, body } = parseFrontmatter(raw as string);
    const images = imageBySlug.get(slug) ?? new Map();
    const resolvedBody = resolveImages(body, images);

    const tags = (meta.tags ?? '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const biblicalQuote =
      meta.biblicalQuote && meta.biblicalReference
        ? {
            quote: meta.biblicalQuote,
            reference: meta.biblicalReference,
            context: meta.biblicalContext || undefined,
          }
        : undefined;

    drafts.push({
      slug,
      title: meta.title ?? '',
      category: (meta.category as Category) ?? 'Sociedad',
      secondaryCategory: meta.secondaryCategory || undefined,
      tags,
      excerpt: meta.excerpt ?? '',
      date: meta.date ?? '',
      year: (meta.date ?? '').slice(0, 4),
      formattedDate: formatDate(meta.date ?? ''),
      readingTime: meta.readingTime ?? '',
      wordCount: countWords(resolvedBody),
      biblicalQuote,
      body: resolvedBody,
    });
  }

  // Newest first — this is also the archive's canonical catalog order.
  drafts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return drafts.map((draft, i) => ({
    ...draft,
    indexNumber: String(i + 1).padStart(2, '0'),
  }));
}

export const INITIAL_LETTERS: Letter[] = buildLetters();

export interface CategoryInfo {
  name: string;
  count: number;
  description: string;
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Guerra: 'Reflexiones sobre el conflicto, la violencia y sus costos humanos',
  Paz: 'La búsqueda activa de reconciliación y convivencia serena',
  Fe: 'Preguntas honestas sobre lo sagrado, la gracia y la trascendencia',
  Amor: 'La entrega sincera, el desapego y los vínculos afectivos',
  Justicia: 'La defensa de la verdad y la dignidad de los desamparados',
  Libertad: 'La soberanía de la conciencia frente a la coerción',
  Familia: 'Los lazos de origen, las memorias compartidas y el perdón mutuo',
  Sociedad: 'Los desafíos comunes de nuestra convivencia contemporánea',
  Miedo: 'El reconocimiento de la vulnerabilidad y el valor de resistir',
  Empatía: 'El ejercicio de ponerse en los zapatos y el dolor de otro ser',
  Política: 'La integridad moral por encima del partidismo y el poder',
};

/** Categories are a fixed taxonomy; counts are derived from the loaded letters. */
export const CATEGORIES: CategoryInfo[] = Object.entries(CATEGORY_DESCRIPTIONS).map(
  ([name, description]) => ({
    name,
    description,
    count: INITIAL_LETTERS.filter(
      (l) =>
        l.category.toLowerCase() === name.toLowerCase() ||
        l.tags.some((t) => t.toLowerCase() === name.toLowerCase()),
    ).length,
  }),
);
