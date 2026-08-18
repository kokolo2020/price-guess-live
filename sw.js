// Minimal service worker — exists mainly to satisfy Chrome's installability
// criteria (manifest + service worker + HTTPS). No offline caching is done
// here since this game needs a live connection for YouTube chat anyway.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through — always hit the network, no caching.
  event.respondWith(fetch(event.request));
});
