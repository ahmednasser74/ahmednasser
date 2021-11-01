'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f7ec1862b4e38da5e113ce8204cbd182",
"assets/assets/acu.png": "690e74c278e7ce37052f61ce1a4760d5",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/ipdaa_logo.png": "aec705035ab986bed56947d59f7e9ce0",
"assets/assets/me.png": "e982694013a4d36030fcfdf290b1e284",
"assets/assets/medium.png": "947369a92d4b5297a22caf393f62f00a",
"assets/assets/ministry_logo.png": "cab86b386054ca802d2d4821f4b59738",
"assets/assets/mob.JPG": "0ee3929bd08a9574622f78e29b6628c7",
"assets/assets/projects/aview_banner.png": "a78fc962b6c7f5847f44ee5ef569d705",
"assets/assets/projects/aview_logo.png": "827cbe4c850285e4eb2a528e504ce4cc",
"assets/assets/projects/blood_bank_banner.png": "40884dc925e2f1e74f81561dac0ee56e",
"assets/assets/projects/blood_bank_logo.png": "ed9d1f40ffd772398262503e193908a6",
"assets/assets/projects/flash_chat_banner.png": "69121b0a3dd3a3ed0c72dfcefc3db436",
"assets/assets/projects/flash_chat_logo.png": "837c4288713dbe56af119bf799ccedee",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/iam_hungry_banner.png": "f3ebdc0faa2d5a1ae8c07d4bee239b68",
"assets/assets/projects/imhungry_logo.png": "ad4bcff9355cad2de36ad7b5bc1e6df1",
"assets/assets/projects/movie_banner.png": "e77924d8adcb7a37a746fa7501451f17",
"assets/assets/projects/movie_logo.PNG": "bc630c3e7cd1fab208789fe5f2a4f239",
"assets/assets/projects/sofra_banner.png": "02356867b2dd03905dac40fe3a9dfbac",
"assets/assets/projects/sofra_logo.png": "0c95ea767bf167b4d30065953a323c1d",
"assets/assets/projects/toast_banner.png": "1df10829d2423d42734708c8033d89e9",
"assets/assets/projects/toast_chat_banner.png": "705b2a7416f74c61ad13ebc8baa7d1a1",
"assets/assets/projects/toast_chat_logo.png": "03c514c26ecd9675e7375bb72015aff4",
"assets/assets/projects/toast_driver_banner.png": "c1ff065cb13550b30cdee29a7a3f10ab",
"assets/assets/projects/toast_driver_logo.png": "f88378a7ee2556bec356c2e239bac792",
"assets/assets/projects/toast_logo.png": "22b68b74fb58f8bf10f9fbae8392f1d2",
"assets/assets/pub.png": "2edf461798c8d65a8edad55afd14242b",
"assets/assets/services/app.png": "b4155c050211e65aa8e002a06b5cea5a",
"assets/assets/services/open.png": "6231af788357fc814bf9cd082febb3d5",
"assets/assets/services/open_b.png": "6231af788357fc814bf9cd082febb3d5",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/stores_logo.png": "26b7dcb189ea5d46f95c77991dce5cc1",
"assets/assets/services/ui.png": "6c22f23257f5056435f66479bdfaf447",
"assets/assets/stackoverflow.png": "a7856e61b3e80d9b15f2e70415982f82",
"assets/assets/udacity_logo.jpg": "d4a3bda9171b553b4ddd51c03cd3c9ad",
"assets/assets/udacity_logo.png": "858e0427fc468de401a3935215d4415e",
"assets/assets/udemy_logo.png": "fcadb82ac7746bdbfa87d3e5532f1123",
"assets/FontManifest.json": "c6025de146e227fabb43e7a91f3ba4a0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b3e54e0604b029575325a7cbcda6c747",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1aea672d744bc1de99f5840074bd6e6a",
"/": "1aea672d744bc1de99f5840074bd6e6a",
"main.dart.js": "48f4de62b6dbbdee4333ded5051bb2f5",
"manifest.json": "ffaa0475e83ddb35d468303d3b1075d3",
"version.json": "8fec7422cd1a3aceb58c4ac51bc3c76a"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
