import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Served from https://lorspi.github.io/cartas/ (GitHub Pages project site).
    // Override with VITE_BASE='/' when hosting at a domain root / custom domain.
    base: process.env.VITE_BASE ?? '/cartas/',
    plugins: [react(), tailwindcss()],
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
