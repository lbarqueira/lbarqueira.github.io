'use strict';

// https://tosbourn.com/adding-service-worker-to-jekyll/

const offlineCache = 'offline-2022-11-11-update'; // The cache key, you can override this to manually clear the cache
const offlinePage = '/offline/'; // Where your offline page lives
const homePage = '/'; // A key page you want cached
const about = '/about/'; // Another key page to cache
const tagsmenu = "/tags-menu/";
const tagLM = "/tag/L&M";
const tagWhoAmI = "/tag/Who-am-i";
const series_intro_page = "/2022/03/08/series-introduction.html"

// Delete caches that do not match the current version of the service worker.
function clearOldCaches() {
  return caches.keys().then(keys => {
    return Promise.all(
      keys
        .filter(key => key.indexOf(offlineCache) !== 0)
        .map(key => caches.delete(key))
    );
  });
}

// Precache specific pages
function cacheOfflinePage() {
  return caches.open(offlineCache)
    .then(cache => {
      return cache.addAll([offlinePage, homePage, about, tagsmenu, tagLM, tagWhoAmI, series_intro_page]);
    })
    .catch(error => {})
}

// Install the service worker
 self.addEventListener('install', event => {
  event.waitUntil(
    cacheOfflinePage()
    .then( () => self.skipWaiting() )
  );
});

// Activate the service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    clearOldCaches()
      .then(() => self.clients.claim())
  );
});

// Try and serve up cached page, or else show networked page, or else show offline page

self.addEventListener('fetch', event => {
  let request = event.request;

  event.respondWith(
    caches.match(request)
      .then(response => {
      return response || fetch(request)
        .then( response => {
          // NETWORK
          if (response && response.ok) {
            let copy = response.clone();
            caches.open(offlineCache)
              .then( cache => cache.put(request, copy) );
          }
            return response;
        })
      .catch( error => {
        // OFFLINE
        if (request.mode == 'navigate') {
          return caches.match(offlinePage);
        } 
      });
    })
  );
});