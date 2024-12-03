const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
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

/*

import EventManager from "./EventManager.js";

class ServiceWorker {
    
    constructor(){
        this.eventManager = new EventManager();
    };


    async AddResourcesToCache(resources){
        const cache = await cache.open("site cashe");
        await cache.addAll(resources);
    };

    InstallationEvent(event){
      caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        cache.addAll(
          '/',
          '/index.html',

        );
    });
    };

    ActiveEvent(oklart) {
      console.log('service woker has been activated');
    };

    
    FetchEvent(fortfarandeoklart) {
      console.log('fetch event', evt);
      evt.respondWith(
          caches.match(evt.request).then(cacheRes => {
              return cacheRes || fetch(evt.request);
          })
      );
    };




    
  Main(){
    const installationEvent = "install";
    const addResourcesToCache = "cache";
    const activeevent = "active";
    const fetchevent = "fetch";
    eventManager.NoneEementEventListener(installationEvent, this.InstallationEvent);
    eventManager.NoneEementEventListener(addResourcesToCache, this.AddResourcesToCache);
    eventManager.NoneEementEventListener(activeevent, this.ActiveEvent);
    eventManager.NoneEementEventListener(fetchevent, this.FetchEvent);

  };


};

    
const serviceworker = new Serviceworker();

serviceworker.Main();

*/
