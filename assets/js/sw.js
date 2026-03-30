const cacheName = "fitust-cache-v1";
const assetsToCache = [
  "/index.html",
  "/styles.css",
  "/main.js",
  "/images/NFU_LOGO_cua_192.png",
  "/images/NFU_LOGO_cua_512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
