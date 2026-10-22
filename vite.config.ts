import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

/** Exposes `virtual:audio-index`: `{ [slug]: durationSeconds }` for every
 *  narrated letter (public/audio/<slug>.json, written by the audio generator).
 *  Lets the home/archive lists show a "listen" button without fetching. */
function audioIndex(): Plugin {
  const id = 'virtual:audio-index';
  const resolved = '\0' + id;
  const dir = path.resolve(__dirname, 'public/audio');
  return {
    name: 'audio-index',
    resolveId: (source) => (source === id ? resolved : undefined),
    load(loadId) {
      if (loadId !== resolved) return;
      const index: Record<string, number> = {};
      if (fs.existsSync(dir)) {
        for (const file of fs.readdirSync(dir)) {
          if (!file.endsWith('.json')) continue;
          const slug = file.slice(0, -'.json'.length);
          if (!fs.existsSync(path.join(dir, `${slug}.mp3`))) continue;
          this.addWatchFile(path.join(dir, file));
          const {duration} = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
          index[slug] = duration;
        }
      }
      return `export default ${JSON.stringify(index)};`;
    },
  };
}
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig(() => {
  // Served from https://lorspi.github.io/cartas/ (GitHub Pages project site).
  // Override with VITE_BASE='/' when hosting at a domain root / custom domain.
  const base = process.env.VITE_BASE ?? '/cartas/';

  return {
    base,
    plugins: [
      audioIndex(),
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        // No installable-app manifest — this is only about letting a reader
        // keep browsing already-visited pages without a connection, not
        // "Add to Home Screen".
        manifest: false,
        // Custom service worker (src/sw.ts) so pages can be network-first:
        // a normal reload must always show freshly deployed letters.
        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'sw.ts',
        injectManifest: {
          // The app shell (JS/CSS/fonts/images) — every letter's text is
          // bundled into these at build time, so precaching them is enough
          // to read any letter offline. `ping.txt` is deliberately left out
          // so it can be used as a real-network reachability probe.
          globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2}'],
        },
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          // Split large, stable vendor code into cacheable chunks so the app
          // shell stays small and the markdown stack loads only with a letter.
          manualChunks: {
            react: ['react', 'react-dom'],
            markdown: ['react-markdown', 'remark-gfm', 'rehype-raw'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 8080,
      allowedHosts: ["test.lorspi.com"],
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
