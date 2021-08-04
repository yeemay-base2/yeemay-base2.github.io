'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6b6579d67779d8d29ad5c01eaefba3c5",
"index.html": "03e114d71656ed96df82f1ad26f8a35d",
"/": "03e114d71656ed96df82f1ad26f8a35d",
"main.dart.js": "6b5150ab5330f393b96f9f781bad59c0",
"favicon.png": "a078cada1dc256a9f1e12e7f80656aca",
"icons/Icon-192.png": "a6148839ae0b8e1d21f7cbca61f90789",
"icons/Icon-512.png": "4fac0d30f8cc6f402c5359859828435a",
"manifest.json": "7f899c411898c450767b27e8f6d12371",
"assets/AssetManifest.json": "02ee04bf3802d1d857d3511fd9ea154b",
"assets/NOTICES": "0e56033f9b8b20bc0e226f0812bba5fb",
"assets/FontManifest.json": "4d13ee53b9a90d4c91c76460548fa6a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/Landing-05.png": "0dbed7f0ab39f9c985610689fb1db790",
"assets/assets/images/BG-03.png": "476d70ec57e1f35f6ae2dd024d786612",
"assets/assets/images/Landing-12.png": "19c23b673e972bb97de2ef98eb31f055",
"assets/assets/images/BG-15.png": "18942053cd63452d9c01631bcd580160",
"assets/assets/images/BG-14.png": "bf0dd8e8fa236a3b2d215cb782abe10c",
"assets/assets/images/Landing-13.png": "14226f62ccefaf5392730847c6bf5ffe",
"assets/assets/images/Landing-03.png": "7398993af27dfaa6046ae4cdc228b229",
"assets/assets/images/BG-05.png": "dbed0a4c737833802459b2e867a1a849",
"assets/assets/images/BG-11.png": "3ac24d95d852803ec27ade7726ba901e",
"assets/assets/images/Landing-02.png": "ddaa4b5eecf037c1ceecdbf048cf5e9b",
"assets/assets/images/Landing-28.png": "50a7812b8a542b6048519d66cbf2f654",
"assets/assets/images/Landing-14.png": "b3aec9bd0760dceb0ac73fe52b82ce62",
"assets/assets/images/BG-13.png": "af825d35d79f39780672b4adbf15a815",
"assets/assets/images/BG-12.png": "94967f599dcc77d9df2458f2e948ea14",
"assets/assets/images/BG-06.png": "337e8a845b57b79d43ec6585d3137541",
"assets/assets/images/Landing-01.png": "8266abe2d91f0a838ab0d169dfdf365c",
"assets/assets/images/Landing-15.png": "4bf89ad9f78ea2359e3d66dada2df313",
"assets/assets/images/Landing-29.png": "1f722b9438bb7853c694341b437f3821",
"assets/assets/images/Landing-21.jpeg": "df217b9a06fb89314a414621bc0264af",
"assets/assets/images/Landing-30.png": "a432a05f54827727aa9933a04048b8de",
"assets/assets/images/Landing-24.png": "acbc515e3df8f7a524209fcbe5f08907",
"assets/assets/images/BG-23.png": "47a36c09e894615b4eeb5a558359f45e",
"assets/assets/images/Landing-19.png": "15d70bffe3de8ce19d373cb2ce200a2c",
"assets/assets/images/Landing-25.png": "3d75b910b05777176ce8f935fc1a0385",
"assets/assets/images/Landing-31.png": "7a54456659a01ae68d9acc6738e07ce1",
"assets/assets/images/Landing-27.png": "d0ca2b7ba20d1e188c30317745fe9e9b",
"assets/assets/images/Landing-33.png": "70dc634a37bd4ad811da4f202f08406c",
"assets/assets/images/BG-21.png": "a9f28954f941dbf7319fed901dd3784a",
"assets/assets/images/Landing-32.png": "45878bb82bf82dcce64bdccc15e75c30",
"assets/assets/images/Landing-26.png": "21c3389f927858652f0d41633b2ed3c4",
"assets/assets/images/Landing-22.png": "add9c56ed7c9441f2183c9ee3cd5530a",
"assets/assets/images/BG-24.png": "4668d4c6392362c66bc72511c4cefd4b",
"assets/assets/images/Landing-23.png": "3d6b3e028554d91cd3d06a28da8e96c0",
"assets/assets/images/Landing-20.png": "5c20a8183953d9bae7ac3d156cb05fd6",
"assets/assets/logo/logo-01.png": "cdc83c3ae8a98da8e4751d7f2af25001",
"assets/assets/logo/logo-02.png": "e742380e4791a374ce65cb4daa1d06a9",
"assets/assets/logo/logo-appBar.png": "83d725ed52465c81eda6bcb68d5f5827",
"assets/assets/font/icomoon.ttf": "7892a1d9b333b3763f96965093bd7f8f",
"assets/assets/font/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/font/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/assets/font/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/font/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820"
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
