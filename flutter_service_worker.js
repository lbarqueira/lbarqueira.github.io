'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d3971bc28c9ac7f4c8e077fd6c446ee9",
".git/config": "c56f1263462f1488c4d0ae2851a11ba7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "8cf6e4216991c0e62a96f0577bdaaa90",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d772db83f916911d06b2db68d65bbba5",
".git/logs/refs/heads/master": "d772db83f916911d06b2db68d65bbba5",
".git/logs/refs/remotes/origin/master": "ba0b976c36f04c7585853136ed08607f",
".git/objects/0d/8fccdca12ff79b7ecbfbfab95ff6679d328c2d": "34e959059f224fcd113a6823ce48f619",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/17/593d925f06d99e3dabd1be33a4fb192b9fbdbe": "f3cf11ffb15866ae9f3c8a8542e469ad",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/1f/117dd5c9e0a62dd56dfa71589dfa14225a4599": "9fbe6b7b79955db283aa07d9a8bac9ec",
".git/objects/23/42a9617194ea43239b9677305e1a709179b111": "5f64721c98c4782c2f3baef46d4d0150",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2d/086a1e912965e6d8b7a025385369b6b1d7a4ce": "ef60cd0f65d7befee995391e29b265c6",
".git/objects/35/3e9dca4e7d9dfe6a4181a5ede60822ad67af3c": "fccfaf079b3b234315b27156923d1db3",
".git/objects/3f/23e02143c7a374a457eb217d23bffe1a2785ce": "f493b78b7984e55308b84d65512f097a",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5d/66c017293db908e9466bae556f795aab1cb125": "012900b846cb65551c144ee2d20a15b7",
".git/objects/6c/2149b5341e0f6ba99a5ed90371b386f899be52": "07ba471c56a1319f941494d4546231d5",
".git/objects/81/e3fbfcc65f1517a76d2d8e9107828aef74f91d": "4ab6008255012bb717504c33eb3e36fe",
".git/objects/88/b6359ed6df61fc81b8f945766446ffb4871d34": "8b9b9486c4d02d1efe8399bcfe1dbbd2",
".git/objects/8a/ef00cbbed4e782720c76c6291a76f64ae0d895": "614b7f174eade8c4297c5e65708ca13c",
".git/objects/8d/ce8fc14696d86d1604397f8556658755cdcdd7": "d6525d366eeb35f4d93b49906bd35e2f",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/ab/22d993603c4cab5f9c5ca0fd9fb5cc93ba5471": "db2f38e16754ea3409d1c35965c14739",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b3/4c4ee328a3fcf3da3858235f0ace7265b3e648": "057eb1b8e42e25548e8633f255d87455",
".git/objects/b5/d61d3463b1286deda02183937f648f94599177": "185b6402de66b642a23d00276c24db25",
".git/objects/c3/73d38e78a7360beca9986a7383c66c6106ce82": "6ee995415c1549e508f9fd86d926c7d6",
".git/objects/c8/27d1dd180be8876e270e4729b647188e1f13da": "64f1aaee1bd64429c2944efa90c6e9eb",
".git/objects/ce/0927791defefa3c24eb8944edda815f45290cc": "ecf014ed7fe33dde4bdf789391e3ff63",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/d4/5a589799708fae957ee1508ba1b4269fb57ec5": "5fa8fb7a33493d9b841eafd4fb7fdef0",
".git/objects/db/fe7f57eefe3f6e0bcaa59fd5ca66286a6cb5a3": "d2368e4ae358d50e35a328ab656c9678",
".git/objects/e1/26b5e06aaafec3258f056d1e81e5a575f56d27": "c46e6439fffdfa766439df4bb10087f9",
".git/objects/e7/4c01160bf000d03d22cf24d722ff29d616a669": "8c2f8a867a1d283206f4e48a41870c0e",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/ed/fa65768399d4e2e0c039fa8f06c1561c989365": "afa1727fa10a8f0b07e6c3bfd7fb0d3c",
".git/objects/fc/b510fe849148eb1e8c8ee9a266a96df3634854": "e315cd857e0e620730a32fa4980d1ca4",
".git/refs/heads/master": "63cf1cca574e3760e240f967f2caac16",
".git/refs/remotes/origin/master": "63cf1cca574e3760e240f967f2caac16",
"assets/AssetManifest.json": "5f6cace354a7384955332d3f8e441a07",
"assets/assets/images/background_image.jpg": "2dfe16069dffd2035eb63338d9fc0f61",
"assets/assets/images/blog_dev1.png": "1c436736cd1041fa9599fa7f6657a7c5",
"assets/assets/images/lugh_happy.png": "f44e77ef5640db788d1fb9287725e6af",
"assets/assets/images/portfolio_image.jpg": "a5c6c4db6e8189b8d8f3773792ae05ba",
"assets/assets/images/qr_code.png": "ef22af72ab3cdfd6300f6b0dbbe577f9",
"assets/FontManifest.json": "94848d5d1266ab3de494166802e8cc11",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/NOTICES": "b47312d62feac618450dd90dc3679338",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "8e1c0412fbcc6b505716f628ceb96b83",
"icons/Icon-192.png": "9d321483bd7d080bc3f83b45567fbed2",
"icons/Icon-512.png": "eb8b53a7dfbfd2ad40aa9900bf7efbd0",
"index.html": "237d106f28fe170b1437840251b68ad7",
"/": "237d106f28fe170b1437840251b68ad7",
"main.dart.js": "e7fb83a417512e56bceed3c064993a27",
"manifest.json": "b5ca26376688a19cdd0d446fe0b2fb7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
