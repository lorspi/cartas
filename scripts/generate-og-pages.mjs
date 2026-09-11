#!/usr/bin/env node
/**
 * Pre-render per-letter Open Graph pages for the static SPA served on GitHub
 * Pages (https://lorspi.github.io/cartas/).
 *
 * Why: "cartas" is a client-side React SPA with a single index.html. Social
 * crawlers (Facebook, WhatsApp, X, LinkedIn) do NOT run JavaScript, so the
 * per-letter <title>/description set at runtime in App.tsx is invisible to
 * them — they only see the static meta tags of the root index.html.
 *
 * What this does: after the Vite build, for every letter under
 * src/contenido/<slug>/carta.md it writes dist/carta/<slug>/index.html — a copy
 * of the built index.html with the OG / Twitter meta tags swapped for that
 * letter's title and excerpt. GitHub Pages serves that folder's index.html
 * directly for /cartas/carta/<slug>, so crawlers get correct previews while
 * real users still boot the SPA normally.
 *
 * Run automatically as part of `npm run build`, or standalone with
 * `npm run generate-og` (requires an existing dist/).
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST_DIR = join(ROOT, 'dist');
const CONTENT_DIR = join(ROOT, 'src', 'contenido');

// Production origin + base path (matches vite.config base '/cartas/').
const SITE_URL = 'https://lorspi.github.io/cartas';
const OG_IMAGE = `${SITE_URL}/og-image.webp`;
// URL route prefix for a letter (App.tsx: /carta/<slug>).
const ROUTE_PREFIX = 'carta';

// ---------- frontmatter parsing (mirrors src/data/letters.ts) --------------

function parseFrontmatter(raw) {
  const meta = {};
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return meta;

  for (const line of match[1].split(/\r?\n/)) {
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
  return meta;
}

function getLetters() {
  if (!existsSync(CONTENT_DIR)) return [];

  const letters = [];
  for (const slug of readdirSync(CONTENT_DIR)) {
    const cartaPath = join(CONTENT_DIR, slug, 'carta.md');
    if (!existsSync(cartaPath)) continue;

    const meta = parseFrontmatter(readFileSync(cartaPath, 'utf-8'));
    if (!meta.title) continue;

    letters.push({
      slug,
      title: meta.title,
      description: meta.excerpt ?? '',
    });
  }
  return letters;
}

// ---------- HTML escaping + tag replacement --------------------------------

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Replace a `<meta property|name="key" content="...">` tag's content. */
function replaceMeta(html, attr, key, value) {
  const re = new RegExp(
    `(<meta ${attr}="${key}" content=")[^"]*("\\s*/?>)`,
  );
  if (!re.test(html)) {
    console.warn(`  ⚠ meta ${attr}="${key}" not found in template — skipped`);
    return html;
  }
  return html.replace(re, `$1${escapeAttr(value)}$2`);
}

function generateHtml(template, letter) {
  const url = `${SITE_URL}/${ROUTE_PREFIX}/${letter.slug}`;
  const fullTitle = `${letter.title} — Cartas que quedan`;

  let html = template;

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(fullTitle)}</title>`,
  );
  html = replaceMeta(html, 'name', 'description', letter.description);

  html = replaceMeta(html, 'property', 'og:type', 'article');
  html = replaceMeta(html, 'property', 'og:url', url);
  html = replaceMeta(html, 'property', 'og:title', fullTitle);
  html = replaceMeta(html, 'property', 'og:description', letter.description);
  html = replaceMeta(html, 'property', 'og:image', OG_IMAGE);

  html = replaceMeta(html, 'name', 'twitter:url', url);
  html = replaceMeta(html, 'name', 'twitter:title', fullTitle);
  html = replaceMeta(html, 'name', 'twitter:description', letter.description);
  html = replaceMeta(html, 'name', 'twitter:image', OG_IMAGE);

  return html;
}

// ---------- main ------------------------------------------------------------

function main() {
  const templatePath = join(DIST_DIR, 'index.html');
  if (!existsSync(templatePath)) {
    console.error('✗ dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }
  const template = readFileSync(templatePath, 'utf-8');

  const letters = getLetters();
  console.log(`▸ Generating Open Graph pages for ${letters.length} letters...`);

  for (const letter of letters) {
    const outputDir = join(DIST_DIR, ROUTE_PREFIX, letter.slug);
    mkdirSync(outputDir, { recursive: true });
    writeFileSync(
      join(outputDir, 'index.html'),
      generateHtml(template, letter),
      'utf-8',
    );
    console.log(`  ✓ /${ROUTE_PREFIX}/${letter.slug}/`);
  }

  console.log(`\n✓ Done. ${letters.length} OG pages written to dist/${ROUTE_PREFIX}/.`);
}

main();
