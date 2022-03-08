const CACHE_NAME = 'BudgetTracker-v1';
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "manifest.json",
  "/css/styles.css",
  "/js/index.js",
  "/js/idb.js",
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Installing cache : ' + CACHE_NAME)
      return cache.addAll(FILES_TO_CACHE);
    })
  );
})