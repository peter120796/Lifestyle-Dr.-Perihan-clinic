'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "b3219694888db65512d827ce5229ee11",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4958f9793e070b20e366e909b3f4dd06",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "100a6b26c2c96df23c9ea39c7b08961f",
".git/logs/refs/heads/main": "2e9bcd5b415972e3644fd7c2f4e3d194",
".git/logs/refs/remotes/origin/main": "5f8b90e568eb4ed55576a9b1de40b66a",
".git/objects/17/85e994f2a8f36f3be79ee3852948fb3035cfc3": "ae67393c26077b40d17a30b9fddf4e8b",
".git/objects/73/63775171f87b76fc0ffa08d0b138cf95e9532d": "1f73ae0c7abab9416ba582a115be1e86",
".git/objects/98/150f987f895bf15b25a701e99143022195b3e2": "48be1636b0ece51a8d8f090204124a2b",
".git/objects/bc/c68f8cd49de8451b655cfd7e9ec5f0f63f5d0a": "129278ed8f02cbb0066304289d3cf5e9",
".git/objects/c0/fc3e9b409fec3e4427bfd14d1a17dd4eaa3c98": "35fdb86f76f419611832ddf64c489f36",
".git/objects/e3/5d91e71a3b6b0b426fffc438734d636d097feb": "4aaa60d2f1edddf7e23917e2b19d8e63",
".git/objects/e4/ebbdafef35100676b2282feb2dc5d353a62843": "ec96c0200b447b388774c114c74860c4",
".git/objects/ee/74bbbabd655bd26476836f520268c60dd43e95": "55240618726e5ae80620a2abed8a1d14",
".git/refs/heads/main": "c2d6bd7a3f830c09a0aab58e122d81e5",
".git/refs/remotes/origin/main": "c2d6bd7a3f830c09a0aab58e122d81e5",
"assets/AssetManifest.bin": "369f15249d80234c5b258851eab05862",
"assets/AssetManifest.bin.json": "402ae55b11df9b5ac6689d1141527366",
"assets/assets/1.jpg": "cfb140e56a004951190d4e7467b8551e",
"assets/assets/10.jpg": "6ec7c8f9c93842f269c93ec548b98301",
"assets/assets/2.jpg": "09ab27822f676f3bc883b1d45b4ec1b1",
"assets/assets/20.png": "b8b0ca72970610ec1ae1e28721703148",
"assets/assets/22.jpg": "1bf5b8fdf04ef3e365141f82626439fa",
"assets/assets/23.jpg": "e58c5ced50879205b3912491136ddd1e",
"assets/assets/25.jpg": "1cae40e486d66201f0320ff82062da7b",
"assets/assets/4.jpg": "34ff2c06348a7dddc42885601240acbc",
"assets/assets/abc.png": "7f9937c8f536be3d582313d37be99205",
"assets/assets/abc2.png": "04b8f6fa18c53bb8b9106dcc860c2cf1",
"assets/assets/AssetManifest.bin": "d9c8a26267b11e687a97160f7dda1810",
"assets/assets/AssetManifest.bin.json": "a5b74496e2f5006b1ee52cf434026a66",
"assets/assets/AssetManifest.json": "dc439e4f508911944a0be329c002fa44",
"assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/Frame.png": "7b154df01561cc9c10ac46d5780260e8",
"assets/assets/Group.png": "4fb9e06f6157ea42db73d4bcc42f072e",
"assets/assets/Group.svg": "3a03e258b1c2b8961545df5b711499ce",
"assets/assets/NOTICES": "dc216c816250f3e1aea9b87eaac7c7f3",
"assets/assets/software-design.png": "709beba01c30dee61e268862993251e5",
"assets/assets/success.json": "394a29335d1047fd4cc193884f887f66",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "57559eac57dadc177d66c1147cadae9f",
"assets/NOTICES": "baab0f0029e88e4e200d54eda8f42a38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "ad0e4ddb388aa9ca2352a3c31c3d1bed",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "ecffc0f0a01c8383a06a11f017d4a88a",
"icons/Icon-192.png": "3f3cb2f3b5be5387735c81cb1f435b77",
"icons/Icon-512.png": "e922f7575db2b37ed320b90ce1d7a72d",
"icons/Icon-maskable-192.png": "3f3cb2f3b5be5387735c81cb1f435b77",
"icons/Icon-maskable-512.png": "e922f7575db2b37ed320b90ce1d7a72d",
"index.html": "e9248137e279803896b50f7d00197878",
"/": "e9248137e279803896b50f7d00197878",
"main.dart.js": "5cb4bf473126ee1f8eafebf7a8f5fae5",
"manifest.json": "ba82b2a9efaac867b087f484262caba1",
"version.json": "143b4509becb6c9ab28f1b634a31673c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
