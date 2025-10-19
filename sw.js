self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('phk-cache-v1').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.webmanifest',
      './icon-192x192.png',
      './icon-512x512.png',
      './favicon.png'
    ]))
  );
  self.skipWaiting();
});
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});