/// <reference lib="webworker" />
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import {
  cleanupOutdatedCaches,
  matchPrecache,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';

declare let self: ServiceWorkerGlobalScope;

self.skipWaiting();
clientsClaim();
cleanupOutdatedCaches();

const SHELL_URL = 'index.html';

/**
 * Pages are network-first, and this route is registered before the precache
 * route so it wins for navigations. That way a normal load always gets the
 * latest deployed index.html (which points at the latest hashed JS bundles,
 * where every letter's text lives), even if this service worker itself is
 * stale — Cloudflare caches sw.js for hours, so we can't count on the browser
 * noticing a new version quickly. The precached shell is only the offline
 * fallback: any client-side route renders from the already-bundled content.
 */
registerRoute(
  new NavigationRoute(
    new NetworkFirst({
      cacheName: 'pages',
      networkTimeoutSeconds: 4,
      // Revalidate with the server instead of reusing the browser's HTTP
      // cache copy (GitHub Pages sends max-age=600 for HTML).
      fetchOptions: { cache: 'no-cache' },
      plugins: [
        new ExpirationPlugin({ maxEntries: 30 }),
        {
          handlerDidError: async () =>
            (await matchPrecache(SHELL_URL)) ?? Response.error(),
        },
      ],
    }),
  ),
);

// The app shell (JS/CSS/fonts/images). Hashed filenames, so cache-first via
// the precache is safe. `ping.txt` is deliberately left out of the manifest
// (see vite.config.ts) so it can be used as a real-network reachability probe.
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new CacheFirst({ cacheName: 'google-fonts-stylesheets' }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new ExpirationPlugin({ maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 }),
      new CacheableResponsePlugin({ statuses: [0, 200] }),
    ],
  }),
);
