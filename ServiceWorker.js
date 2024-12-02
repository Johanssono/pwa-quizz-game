import EventManager from "./EventManager.js";

class ServiceWorker {
    
    constructor(){
        this.eventManager = new EventManager();
    }


    async AddResourcesToCache(resources){
        const cache = await cache.open("site cashe");
        await cache.addAll(resources);
    }

    InstallationEvent(event){
      caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        cache.addAll(
          '/',
          '/index.html',
          '/css/main.css',
          '/icon512_maskable.png',
        );
    })
    }

    ActiveEvent(oklart) {
      console.log('service woker has been activated');
    }

    
    FetchEvent(fortfarandeoklart) {
      console.log('fetch event', evt);
      evt.respondWith(
          caches.match(evt.request).then(cacheRes => {
              return cacheRes || fetch(evt.request);
          })
      );
    }




    
  Main(){
    const installationEvent = "install";
    const addResourcesToCache = "cache";
    const activeevent = "active";
    const fetchevent = "fetch";
    eventManager.NoneEementEventListener(installationEvent, this.InstallationEvent);
    eventManager.NoneEementEventListener(addResourcesToCache, this.AddResourcesToCache);
    eventManager.NoneEementEventListener(activeevent, this.ActiveEvent);
    eventManager.NoneEementEventListener(fetchevent, this.FetchEvent);

  }


}

    
const serviceworker = new Serviceworker();

serviceworker.Main();































/*

import EventManager from "./EventManager.js";


debugger
class ServiceWorker {
    
    constructor(){
        this.eventManager = new EventManager();
    }

    async AddResourcesToCache(resources){
        const cache = await cache.open("v1");
        await cache.addAll(resources);
    }





  
  InstallationEvent(event){
    console.log("testererererrrerreerer")
    event.waitUntil(
        addResourcesToCache([
          "/",
          "../icon512_maskable.png",
          "../index.html",
          "../css/main.css",
          "./main.js"
        ]),
      );
  }

    
  Main(){
    const installationEvent = "install";
    const addResourcesToCache = "cache"
    eventManager.NoneEementEventListener(installationEvent, this.InstallationEvent);
    eventManager.NoneEementEventListener(addResourcesToCache, this.AddResourcesToCache)
  }


}

    
const serviceworker = new Serviceworker();

serviceworker.Main();




self.ElementEventListener("fetch", evt => {
  console.log("fetch", evt)
})


self.addEventListener("install", evt => {
  evt.waituntil(
    cashes.open("test cache").then(cache => {
      cache.addAll(
        "/",
        "/main.js",
        "/main.html",
        "/style.css"
      )
    })
  )
})













self.addEventListener("install", evt => {
  console.log("serviceworker installed")
  evt.waituntil(
    cashes.open("test cache").then(cache => {
      console.log("caching stuf")
      cache.addAll(
        "./",
        "./main.js",
        "./main.html",
        "./style.css"
      )
    })
  )
})

self.addEventListener("active", evt => {
  consol.log("serviceworker active")
})

self.addEventListener("fetch", evt => {
  
})



































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



*/