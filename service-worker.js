const CACHE_NAME = "sito-giuridico-cache-v1";
const URLS_TO_CACHE = [
  "index.html",
  "contenuti.html",
  "approfondimenti.html",
  "cronologia.html",
  "archivio.html",
  "autori.html",
  "contattaci.html",
  "style.css",
  "search.js",
  "theme.js"
];

// INSTALLAZIONE
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// RICHIESTE
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
