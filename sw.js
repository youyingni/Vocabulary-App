// =====================================================
// Service Worker — 單字本 PWA
// Version: 1.0.1  (bump this string to force a full cache refresh)
// =====================================================
const CACHE_NAME = 'vocab-app-v2';

// All files to cache for offline use
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // Google Fonts (cached on first load)
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined',
];

// ---- Install: pre-cache all assets ----
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache local assets first (can't fail), then try remote fonts
      return cache.addAll([
        './',
        './index.html',
        './styles.css',
        './app.js',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
      ]).then(() => {
        // Try to cache Google Fonts (ignore failure — offline still works)
        return cache.addAll([
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
          'https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined',
        ]).catch(() => {});
      });
    })
  );
  self.skipWaiting(); // activate immediately
});

// ---- Activate: clean up old caches ----
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ---- Fetch: Cache-first for local, Network-first for remote ----
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // For local app files → Cache first, fallback to network
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // For Google Fonts → Cache first (they don't change)
  if (url.hostname.includes('fonts.goog') || url.hostname.includes('fonts.gstat')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return response;
        }).catch(() => new Response('', { status: 503 }));
      })
    );
  }
});
