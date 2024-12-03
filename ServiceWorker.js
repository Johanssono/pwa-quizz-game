const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/css/main.css',

];

self.addEventListener('install', evt => {
    console.log('service worker has been installed');
    evt.waitUntil(    
        caches.open(staticCacheName).then(cache => {
            console.log('caching assets');
            cache.addAll(assets);
        })
    );
});



self.addEventListener('activate', evt => {
    console.log('service woker has been activated');
});



self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});