'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "da7cb8d7688bced9c8f85754462e2444",
".git/config": "5a74987f0c4a0ddb2d5e7dd950350c0f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "dcc6e7744c103d634aeaf9cc34904a73",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f5a9036a3505eef6cfac2b819c15b9c",
".git/logs/refs/heads/master": "0f5a9036a3505eef6cfac2b819c15b9c",
".git/logs/refs/remotes/origin/master": "420d1edbb7f842a5a6450bdffee069f8",
".git/objects/03/e61a5df6a34d97a4f19d002d020ef3e3f2a9c4": "96fd240f07eee5cb2200619dc12bd465",
".git/objects/06/8a6fd861047ef91e71dd12187aeffb59e3d99e": "7606cb212b860538571524d755783faa",
".git/objects/08/6b8ba6d0b25b14f25362d3812974251c83376e": "d09c6ed850450f473b56e9c06ca0d7ab",
".git/objects/17/ed5d7bf0ca23646141caabadc163fadee13c2a": "2d87220d34a3e77ab7ac574976c2da3f",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1f/9599daf8a45ad3c850bc9d0d20fb994d6fa115": "48509ec9101cbbd1ab9f497130b2fd97",
".git/objects/20/98604057419d92abb301ea71d298ef6fc50924": "ccc04c9e885200edc1cd6f7706102a61",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/a5dfbd2781b86ae9ea309367426a47dd1564c4": "2535c48118ccf7d2a0450493a8cb2fc5",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/8be71bcc95d46abdd3128d715f9749995ae8d0": "59fb2e388ef4c905f68a7b908df94e96",
".git/objects/2c/50e5eee761680b6b9dff7867b11b795a00e0dc": "3bb7da3a737860b20c415843fe9839a4",
".git/objects/2d/d0c3de512f52036bea12c49aeb37a0e4db31c4": "266b3fa28a016a96828263219cd74bb8",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/30/bf92e72c8f31180af84832a2845cf58d96628d": "7319aa349959bd25f10e086fa18815cc",
".git/objects/31/1375f1417eab74ec6105bba51c8dd9361297c9": "1d780c515e0f3af746e96833b9a6c5c9",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/13624e7ff41e987eedfdee130f7f29757076db": "3f6cf1ac2f35486c48a71960557f9325",
".git/objects/38/83b4a89f712bc375a58422d7fe3e7ea7cce559": "7c4fc57af48589c8edf56efaa50a8ebd",
".git/objects/3e/9e9425ff1307b9bf1508013236871e451762c2": "aa7629c7bc76f3b166b7bf6400805659",
".git/objects/41/9223866e4a8a2d63a17ec7e40808cec2d3daae": "35b5deeab7c3e27d7605fdd138d2ed60",
".git/objects/42/d3acbbb461d13324e011851d02592bd08f13c6": "8046710f83379786934f15c994d1a524",
".git/objects/4a/75f0edda0b3dc7c501525bd1c0f7f04137982d": "d7060f271764b2b0492ee640dd3dcb8e",
".git/objects/4c/a92267982636e0ca3a4623f65eb8e8cb5e872f": "a2e080b65e7a437ad0f983b6a871e596",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/54/1291f59bfa36d0bdc3640d90849fb4b1906f43": "bd46650044bb46edc7f62d592608e299",
".git/objects/55/5c4e45e363e182219468b8e2ac9e420002811d": "5893fa8796d4a43c8396926005e20256",
".git/objects/59/ad589e0917d310efbba2d5f4c3a8fe1ed52425": "28e7848863fdfc57773731819f501124",
".git/objects/5b/eecd9cfd7467ef02be22797b8c0af6db09889a": "1256962d0003a5775128fffb817c59de",
".git/objects/60/b702105969fa08290c74f9bd2956b0f9905ba4": "95a73c2147ed614bc47bc23d281ca2b3",
".git/objects/64/5d226bcdc57ed17f2ef36fdec026c693f382f8": "a4cd34df69e5a842296c47914763cd8a",
".git/objects/65/8051b2959cc243ed6f44f0866a09dd872db3ce": "72bca627bfe441712a8e1d0a271832cd",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6d/59751a743e8a1a9de65d226f65ea2157b7e4fc": "83bc4085bf14e448e38416e072854bf4",
".git/objects/6f/20797c66b99a083caee512c9e1132a6f00d4c7": "8d5e3402cb0699a56b8b14b5fe50cadd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/5fe4a3cce68a1a4cbbbdbb6ddbb50bedf0dbd2": "923e9815b4d512fe3e244f9a229bbb3d",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1884b50a149b3881560e6ec796442a12aaebb6": "4b797e861c20b4f8518d600c5d5a0b5a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/93/9a114fe2e602b3d3f86d4c1502d5ef91003da4": "eecb1bb0dfa38f3f4a4f9e44e36a04fe",
".git/objects/95/4325d85ccd0bf07d6a2fbc97dfa0ce669ec1f5": "18189802b971f731c6ebaa99c1b7a8e1",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9d/45a9e2fcd46f1ea77d8f2e5bf30fa885fb21cf": "5a7183c7e98378e4ce51a4d2b75c312c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/d7567e1a71c506cf22ed936c14261c57a5c953": "05d3346540e83f20e356da8142cc1de6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ad/cde006bbd0c7299dc42400f76a02324c637da4": "65a8d03e6ea25c13803bb37463f065b6",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b50f27dc2bedee0f46b8f3a25dce3ae6aa6997": "5a2d3e3fcf4a81c587599cd6cd29ede3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/6e2dfac47ccef584eb7054a1f7d1b12038083b": "3e67cac29eb80671736a718381c441a6",
".git/objects/c3/d071f59b52f3e8b71744b55840efb1a864541e": "8e24644763afea042f3103416a65d49b",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/d0/29bdf55a01b0dc344c7fd42e53ae7ec30ed784": "230893a0ca3719be138d5347c345827b",
".git/objects/d3/253e8955c72ae606d736337b56db822fd675e3": "38acec82a91aa6cae70d68f95f4546d7",
".git/objects/d4/0919bff0b25a613e9f610261f518db3a6730e3": "dde2c2885f629b925711b2dbea1b3ea3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/0661072ef08d8279a0ef6f5e2a47e1eb1152ac": "45eec867c23f65035358828f80e5ed0c",
".git/objects/df/b58b9845396605dc90f7a5dde8bea7fccd3c17": "94199c939df057017c282a08261250bb",
".git/objects/df/eddc698eae9d38107a919dcb7bfe50c6345b85": "f723628c8c8eb6a086e3cc767825bacd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/932a69a6b5b4d3112615d6f96e2cdc2cd76378": "23129682b3bfcdc0532146bb86d959fe",
".git/objects/f2/f6212e28b475807486bc32b51ace733bf2a644": "2e895e11690d0dc11ac8aef8bf194a49",
".git/objects/fa/7bea55195aaa3c4e5adc62b2274d8a676c0350": "b4c27e4c00a2f7ebf98dc18cd3f32b9e",
".git/objects/fe/9c4658587e086da72f8c70272a31c80560b306": "8cbb90271099eb2ba466c8d915131fe4",
".git/refs/heads/master": "ff52ad27cf528c2d9c43d16fa9bc305a",
".git/refs/remotes/origin/master": "ff52ad27cf528c2d9c43d16fa9bc305a",
"assets/AssetManifest.json": "8695d460a66832ffbf03ec805360953c",
"assets/assets/acu.png": "690e74c278e7ce37052f61ce1a4760d5",
"assets/assets/companies/imhungry_logo.png": "ad4bcff9355cad2de36ad7b5bc1e6df1",
"assets/assets/companies/ipdaa_logo.png": "aec705035ab986bed56947d59f7e9ce0",
"assets/assets/companies/turbo_icon.png": "6a7537307da41b3b239b743e865b2b14",
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
"index.html": "e5fd9b4ab6bfbb0b0a42faccdfbbf2c8",
"/": "e5fd9b4ab6bfbb0b0a42faccdfbbf2c8",
"main.dart.js": "0ff2e717dabb2864572c4bfa508a9689",
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
