const cacheName = '00001';

const cacheAssets = [
  'accueil.php',
  'js/accueil.js',
  'inc/Headers.php',
  'inc/footer.php'
];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    async () => {
      cache = await caches.open(cacheName);
      console.log('Service Worker: Caching Files', cache);
      await cache.addAll(cacheAssets);
      self.skipWaiting();
    }
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
