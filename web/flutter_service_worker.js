'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a689944169ddf88863abee9175a80752",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/Icon-maskable-192.png": "f8ae2bccb1fd8d6eb23fd9df8c557253",
"icons/Icon-512.png": "34696c9ffc88debd25baecd11937c620",
"icons/Icon-192.png": "f8ae2bccb1fd8d6eb23fd9df8c557253",
"icons/Icon-maskable-512.png": "34696c9ffc88debd25baecd11937c620",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d8dc52ada72c832ac72f06e7cc3e1a49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/solana_wallet_adapter_platform_interface/logos/solflare.com.svg": "4d16fc0b033f494990dc0c3f100ca165",
"assets/packages/solana_wallet_adapter_platform_interface/logos/solflare.com.png": "f7c254545217d3573a88aaf11bfeeaf9",
"assets/packages/solana_wallet_adapter_platform_interface/logos/phantom.app.png": "68ffb817a2e5b434e65977fc0bf174e6",
"assets/packages/solana_wallet_adapter_platform_interface/logos/phantom.app.svg": "cd3dcc68a67ed6b2fb84f7f37defdba0",
"assets/packages/solana_wallet_adapter_platform_interface/badges/ios_badge_light.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/packages/solana_wallet_adapter_platform_interface/badges/web_badge_light.svg": "ced73cba82afdfaa17376e644c0dd2c7",
"assets/packages/solana_wallet_adapter_platform_interface/badges/web_badge_dark.svg": "824555b0001605c37b521a2cca495dc0",
"assets/packages/solana_wallet_adapter_platform_interface/badges/android_badge_light.png": "d995f270316f7885fb5c6ce284060059",
"assets/packages/solana_wallet_adapter_platform_interface/badges/ios_badge_dark.svg": "0f3514a45d51f95167e5fe8b6a03bb60",
"assets/packages/solana_wallet_adapter_platform_interface/badges/web_badge_light.png": "a1d437ae86c4e195c05bf66f06eecded",
"assets/packages/solana_wallet_adapter_platform_interface/badges/ios_badge_light.png": "1e7467e189318a3430f8eb18fd58f458",
"assets/packages/solana_wallet_adapter_platform_interface/badges/android_badge_light.svg": "6133de0b0e76eeabc11489f5d28a7bc0",
"assets/packages/solana_wallet_adapter_platform_interface/badges/android_badge_dark.svg": "d3c8fa323050902001a1b798deb40277",
"assets/packages/solana_wallet_adapter_platform_interface/badges/ios_badge_dark.png": "33ead84a2e37f3c630ee8efc871d6a0e",
"assets/packages/solana_wallet_adapter_platform_interface/badges/android_badge_dark.png": "af1bebf782022d8af14687f36f32cb13",
"assets/packages/solana_wallet_adapter_platform_interface/badges/web_badge_dark.png": "a513226ce0a271a6c65deb65c12e8d36",
"assets/AssetManifest.bin": "43afe9ccb0c9e4c2e5f57ad1cd4554e5",
"assets/NOTICES": "25b1e1bf553e1259ede358790e17d59b",
"assets/fonts/MaterialIcons-Regular.otf": "31db9c0d2139413ff9d321c2be39ff85",
"assets/assets/images/solana.png": "a9e4c47fbe1dd17a3154fd207e70168f",
"assets/assets/images/play_store_512.png": "e8e48a8ae8e82d70d93da1f6bce191c1",
"assets/assets/images/1024.png": "f2c0eb9f8a504dd343807733f5498d80",
"assets/assets/images/nft.jpg": "35208de5d380572fce63e6c5e577b595",
"assets/assets/images/nft-removebg-preview.png": "3487ac4febb97b9cb838a15b0af9df5e",
"assets/AssetManifest.json": "b99a0b7da4f8a4939762873edb5b78da",
"favicon.png": "aabd595054c1dcb8099737a9afeabc25",
"flutter_bootstrap.js": "e464d02742c2770c3b3644260740734a",
"index.html": "932e4947bd6ae14ce55d71466d2dc22c",
"/": "932e4947bd6ae14ce55d71466d2dc22c",
"manifest.json": "92f0f984527328e9705c16cfb3bb4069",
"main.dart.js": "64142792626543937588455ca126ba51"};
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
