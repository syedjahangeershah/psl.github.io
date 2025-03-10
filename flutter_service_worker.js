'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "030c6af722e5187679e13239d8e7e7ae",
".git/config": "ea96c3c9f1f13803d38d4313e456cb07",
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
".git/index": "1f13d518e2d1aaae1008fd04486320f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb49316670dd8fc487a475d42870c791",
".git/logs/refs/heads/main": "c6ec6f3e8d3590f45ad785a50ca1087d",
".git/logs/refs/remotes/origin/main": "5d036678c6a5498b98be62cae3ea9c8e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "e105e618ebe72cd32bb8ffbede8c4bf6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "6e52dd0d00b1b7a37d90e50848791b2f",
".git/objects/19/b9d6a7a91d493d14c778cbedb406bfd331b4d4": "55eee4d28135a700101f02a541c1f312",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/2f/9f8fbdadfefac095611b7e09051ff5aeee79eb": "02e542c1b84105ac05bc5b7ce08440ac",
".git/objects/36/ce7f17d9a9f74dd4f7385b147a06778224e4c8": "27f231e87b6632d5af12f409d78f49e3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/47/71c369b9596f4a44dc1b8b1aba432b4b03da7d": "23633b31f6dd067ea44bc87319be9481",
".git/objects/48/c6640dec36737640d64e3c7125af3a0eb1ee9d": "712b03ec13057ce00e77c3cb7aa7b0ce",
".git/objects/4d/b6ef67f61e5a0c8e20b0deef3866837608177e": "d7c5c3c939b6902911d58bc406a9630e",
".git/objects/52/23203e37e14dc1a618dfe1f2632ccc66335a6b": "954be68bd1e83d286e0325582c58e265",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "743528047a4cdc4416b25d95947073b8",
".git/objects/58/b3f1b8930afeab6d06f23df90f9c60860f7b7f": "e199770ff26caa4ebd681a484c89dfa8",
".git/objects/5e/db915a958082090b7b37242e59f3ec969ea05b": "c80dd9578d965f9deaa11f1e0e5f002f",
".git/objects/61/45485bc6c2dc20a7bf847808a9d2ecb6ad2fe1": "b22e38e3cbe37189c708f1ad4d0e82c5",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "c04d0bcbee109da1b68573e9237d1b84",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/6f/871fed6ae5b8b998aae5a9bebc6b8bd8e5743d": "d5195fe58a89f16703ac18cac6431e7e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/7d/763b204b2b9412528ddca0d413e16a7065890e": "a21d176ff2049fe0961177e563759f71",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "6fdd92d7e08d5916358e7f30a83d2d51",
".git/objects/84/7540080412928eacf52e439afbb0e0fe251e34": "9c4ce25c2dcfe1b33dce51a956fceeac",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "ce956a8d00f49bf2107a3acb294d3765",
".git/objects/8b/fa1110d6f571ab743dcb353bbbb6e21293abb2": "ea2631efba86070a56cce4bbed8e383b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "8003b3408ffe6fc347eaa3ce30414536",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "6db9ef87f25d1bcf0e7bea48b7fdf817",
".git/objects/90/fe4ee89a0253698bb8ecbff99951d6c7149ffd": "ea5d1b2eaa5455ddd26d4ea926f29dea",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/98/11f38d405f11a850c47772868b87dad7c008be": "16ddb8e0359e646cccbfd29a6bd8e64d",
".git/objects/9d/1562f3067357b951a251628538fe5c388afb2e": "2d0c61c7be3c99371a607214c72bb915",
".git/objects/a4/707a1c5d4a57b473e41c151d01282a52d384e6": "e3babd79e097c83bf4131fc3e82bb0fe",
".git/objects/a4/b2fb73a15d0b98c4edd7f691531a862da4695b": "5b828e76b83bdd87ea7ff23123e3f5cf",
".git/objects/a9/0794400e0401c6f9a0d6798e256df80fa842d1": "13f9d77dbe014957ed0a7e955f8b09fe",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "eb3281696880d690bdce53639613dde5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "5110ec697534feee9d97421c47d78964",
".git/objects/ad/b66017fb6f4d005a8e5828b3f126f7757cbbb9": "5f238902e0973f8ff608db96d6bdd05c",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "8060d1c9d589a2066d31c35740a3b5cd",
".git/objects/b1/d42bb0ead5998bd52c9f4711c4056381cc6512": "399d032c4c5e93cdbe9204d3a13ee381",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/c2/a602fff06f180bdb29e59a67dccbb6cf200281": "3a0eceda53a662f48f73cb6e9b8b028b",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/cc/2b640709b78c2c1e2eed20dc2ec69cdac9da9a": "42179516f02a207c6eb3618d68dc5b46",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "89d33e0dd661f2efa9067d9bb6202d62",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d6/a2f0781ee5a36307b3c43118d475c6b58ba880": "f120f42aea1e8b6db955e20cf1084438",
".git/objects/d7/9cd2b40a794830d5e42acd1beb466092966dca": "0d070f1066d0f7ec8609de6437d42354",
".git/objects/da/1b404b7d76a6fb66570ec2d86ece372610b120": "817891aefcfa553344c848589b8a7a2f",
".git/objects/e8/55ab1ce2bb00c6c52893a1d9cf627b8849824a": "346bce9c463104b244a2ba5e43399cdb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f8/da0c9778b692761c393322e9dd4c202c984577": "5154d5a297a8d161b425292ca36999a2",
".git/objects/fc/14c5028ac741025a9ec20f4abbe78d423d376b": "1789091ec1ffc64023dfec7589960f3b",
".git/refs/heads/main": "ed23b06fcea7ff61ed7ff6e7d9c742dc",
".git/refs/remotes/origin/main": "ed23b06fcea7ff61ed7ff6e7d9c742dc",
"assets/AssetManifest.bin": "16d26eb519f4e9e3ea9a403f56480427",
"assets/AssetManifest.bin.json": "88c715dcec5c7b4a4156f7da76617f6d",
"assets/AssetManifest.json": "0d8be223df64f684a30d1c7caf8e5489",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8a70048447a79224ec8e4cf71aee877a",
"assets/NOTICES": "399d995633751f46a5025b425916eb0f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "94f8b91848d9e8000515208aad70d3b9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a649fdabb83a0e25e6f05bb7e3a34c28",
"/": "a649fdabb83a0e25e6f05bb7e3a34c28",
"main.dart.js": "c2dd81ebc9be0da1962485d0fcbe0c88",
"manifest.json": "677dc214842489d9001f767dba9f66a0",
"version.json": "3066cff843a20ecb089ace004c9340c5"};
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
