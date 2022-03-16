'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "01b6b6f6ebd57a4149f2687ba00e7894",
"index.html": "e7a8bd553581d522e45d4c00871c0691",
"/": "e7a8bd553581d522e45d4c00871c0691",
"main.dart.js": "e312d119c815e4f5a0aef3815c93ef49",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "16aaf74b4b82794cf07c385cfae9376a",
"assets/AssetManifest.json": "69a1d53f9a94219beb3a95d593a0983f",
"assets/NOTICES": "2e858f8bb949240ce1e9a016ea099159",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/menus/drinks/orange_ade.jpg": "7fc28a762d85afe022fbc81e9e2310b3",
"assets/assets/menus/drinks/strawberry_juice.jpg": "6a6df81916af3c0d180eb4904b7da440",
"assets/assets/menus/drinks/soda.jpg": "6eef26bdbe0634ec80ba4634833e2724",
"assets/assets/menus/drinks/lemon_ade.jpg": "48686eaafa59e9f82c1b4507b3b56e92",
"assets/assets/menus/drinks/gold_kiwi_juice.jpg": "590516e385a0a3e692b2f51beb865e44",
"assets/assets/menus/drinks/jamong_ade.jpg": "252c30fd23a007857c0783195f06b8fa",
"assets/assets/menus/coffees/ice_tea.jpg": "481699a0b7f75a5e03e314a28871e479",
"assets/assets/menus/coffees/vanilla_latte_hot.jpg": "31e6cf90764688601db37653b879b1fe",
"assets/assets/menus/coffees/cafe_latte_hot.jpg": "31e6cf90764688601db37653b879b1fe",
"assets/assets/menus/coffees/americano_ice.jpg": "1764b60da06369a9b7b1cb0fff5a5da6",
"assets/assets/menus/coffees/cafe_latte_ice.jpg": "95ed898a08d80ba448aedbebbc0a511a",
"assets/assets/menus/coffees/americano_hot.jpg": "a7f32a4024c43b18e689c86c1aa5d42e",
"assets/assets/menus/coffees/vanilla_latte_ice.jpg": "95ed898a08d80ba448aedbebbc0a511a",
"assets/assets/menus/sides/herb_cheese_stick.jpg": "4b0d158346c2f5b0f76ace1c6b43833a",
"assets/assets/menus/sides/chicken_brest_salad.jpg": "eed404ef7edb34911f843be3f96408cc",
"assets/assets/menus/sides/mozzalera_condog.png": "3d6c6380539f9ddeb5ec15f4645d6fdf",
"assets/assets/menus/sides/casaba_chip.jpg": "3559001e05327fb0b23262b7ef37c456",
"assets/assets/menus/sides/onion_ring.jpg": "48c4ecabba619e523ec204efc434b200",
"assets/assets/menus/sides/cone_salad.jpg": "590a71db8d237bacb2e418c0a6e61eab",
"assets/assets/menus/sides/sausage_egg_muffin.jpg": "c4e60a23eaa98635cf8e502c36481fbf",
"assets/assets/menus/sides/chicken_salad.jpg": "9a6277ce5a4a62e9c4e40564783cefc4",
"assets/assets/menus/sides/grilled_sousage.jpg": "ced8adae027850f16b966c1deb242766",
"assets/assets/menus/sides/frech_fri.jpg": "d2c448860c66ca66269e66e636d55c5c",
"assets/assets/menus/sides/steff_salad.jpg": "ac99d01c2fe183e3638c4c11cf2b3a34",
"assets/assets/menus/sides/mini_hotdog.jpg": "5fcf9aab705b1a08fafd671944aa4ef4",
"assets/assets/menus/hotdogs/chilli_pork_holl_buger.jpg": "3365d7342f1d2d667e3aaecaf09f44eb",
"assets/assets/menus/hotdogs/galic_bulgogi.jpg": "debc0dda7108143bc967a8ed1e4674c1",
"assets/assets/menus/hotdogs/scrumble_egg.jpg": "eb533dac2ec2d823d2f2eb56b2d9433e",
"assets/assets/menus/hotdogs/real_beef_holl_buger.jpg": "c83f348c2e13ba141ac5015a53dcb4b5",
"assets/assets/menus/hotdogs/chilli_dog.jpg": "e5308add0d906b7e8f5b1a6cc1b343fd",
"assets/assets/menus/hotdogs/origin_hotdog.jpg": "ef433858f25482ff89903115151472c6",
"assets/assets/menus/hotdogs/peperoni_pizza_dog.jpg": "9b82784ea28bf54dbf07ee1c9c59cec4",
"assets/assets/menus/hotdogs/steff_hotdog.jpg": "f5acdb68618ebefdf2d9a695562ceb28",
"assets/assets/menus/hotdogs/galic_shower_dog.jpg": "639f59e5d9cc797e9437e86c4e2cb3cd",
"assets/assets/menus/hotdogs/sweet_barbeque.jpg": "15381e4b2553bfd1bb7d548dfba0260b",
"assets/assets/menus/hotdogs/bulgogi_pizza_dog.jpg": "f68f252fd0982c6d34054bee8f6f5b45",
"assets/assets/menus/hotdogs/meat_chilli_cheese.jpg": "46c010813784643da557046aefe1f021",
"assets/assets/menus/hotdogs/bulgogi_mayo_dog.jpg": "0c62bd9dd68f9fee487abbb79774179c",
"assets/assets/menus/hotdogs/cheese_dog.jpg": "04d3c08e0697fcd9f4c5423c74261535",
"assets/assets/menus/hotdogs/peperoni_hotdog.jpg": "98e699e214f07b4ea15d21ef7ca442fb",
"assets/assets/menus/hotdogs/cheda_cheese_hotdog.jpg": "650fc42bb84fdf524eb5440e816be60b",
"assets/assets/menus/hotdogs/plain_hotdog.jpg": "98702f014a629cd42bbe0175b68e4c1a",
"assets/assets/logo_steff_houlberg.png": "470a22646ba4ede5199e2a7e15338001",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
