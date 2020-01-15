/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "dist/css/above-the-fold.css",
    "revision": "cff7b17aa4f757ef631a8ab079d644a2"
  },
  {
    "url": "dist/css/bozo-devs.css",
    "revision": "f33a118f76c9a51f1376ce879ebef24e"
  },
  {
    "url": "dist/css/editor-style.css",
    "revision": "ca139a22ba6a7c718b4153cb9490c764"
  },
  {
    "url": "dist/css/login.css",
    "revision": "a8cb2175e02318c1b3c0139dbd5a2f4b"
  },
  {
    "url": "dist/css/master.css",
    "revision": "3541baeace758b84e0dcaec17a53dcbb"
  },
  {
    "url": "dist/css/master.min.css",
    "revision": "50a51dc2328743f62c84696026f01632"
  },
  {
    "url": "dist/css/wpadmin.css",
    "revision": "3f8dc86954ef6db4e31d1779ea59eb89"
  },
  {
    "url": "dist/scripts/bundle.min.js",
    "revision": "c2e2997887d6527f2e2a81558dde79fe"
  },
  {
    "url": "src/scripts/inc/navigation.js",
    "revision": "7469e4ae71a11a4dbbff12c5fbf09851"
  },
  {
    "url": "src/scripts/inc/skip-link-focus-fix.js",
    "revision": "381a9581291af74e622863b9ae1436bd"
  },
  {
    "url": "src/scripts/scripts.js",
    "revision": "fb8464201ea160b0a8bfc9abe8cfc063"
  },
  {
    "url": "src/scripts/vendor/headroom.min.js",
    "revision": "b0a311ea668f8e768ea375f4a7abb81c"
  },
  {
    "url": "src/scripts/vendor/modernizr.min.js",
    "revision": "f0035cb31b1794b6ee57a896facd28f0"
  },
  {
    "url": "src/scripts/vendor/owl.carousel.min.js",
    "revision": "45f8402d3a87a390c322adb2410e24ea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\/wp-content\/.+/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
