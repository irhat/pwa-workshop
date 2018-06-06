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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1-manifest/index.html",
    "revision": "8beca2b0dcba48ab12838b7d305e328f"
  },
  {
    "url": "2-service-worker/index.html",
    "revision": "57bf901170aae5b662559c1bbb24332d"
  },
  {
    "url": "3-precaching/index.html",
    "revision": "72420fd674cccba547b6e721e800e4ca"
  },
  {
    "url": "4-api-cache/index.html",
    "revision": "130a327f502a16340a921483b531430c"
  },
  {
    "url": "404.html",
    "revision": "87116822ce1dbf46a180e03a515ec2e4"
  },
  {
    "url": "5-background-sync/index.html",
    "revision": "0e27302eacf220eada3f622f187ae8e6"
  },
  {
    "url": "assets/css/0.styles.b27e0b11.css",
    "revision": "4399f79c958ad0239002573741190c66"
  },
  {
    "url": "assets/img/cache_storage.04f1ba9e.png",
    "revision": "04f1ba9ed07207b6e2bf16c145ded159"
  },
  {
    "url": "assets/img/pwa_install_menu.ee008090.jpg",
    "revision": "ee008090d470bd49f103048c78b27004"
  },
  {
    "url": "assets/img/pwa_install.cc0b35b6.jpg",
    "revision": "cc0b35b697f8184d6395afb5d88e08f3"
  },
  {
    "url": "assets/img/pwa-fullscreen.20336af1.jpg",
    "revision": "20336af1158ce5aa4668c69bc906f42b"
  },
  {
    "url": "assets/img/schema.688fdb36.png",
    "revision": "688fdb36ff7e9f0171d56d24b4907bef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/service-worker-setup.84b2c4b3.png",
    "revision": "84b2c4b3886cf6f9704a2ca5cbf2b952"
  },
  {
    "url": "assets/img/splash-screen.969824ea.jpg",
    "revision": "969824ea89a411668c5a855d9a9df8ab"
  },
  {
    "url": "assets/img/sw-lifecycle.1d49eede.png",
    "revision": "1d49eede76c14aada50e839296506488"
  },
  {
    "url": "assets/img/sw-waiting.0b9f4663.png",
    "revision": "0b9f4663d4f9847758f9145b5fdbf5dc"
  },
  {
    "url": "assets/js/1.f1db8612.js",
    "revision": "3e37e3db0c8782e6c58c287443554ef9"
  },
  {
    "url": "assets/js/2.14c9a69d.js",
    "revision": "658bbe61728aa7f7c18b37a1b13e1d2c"
  },
  {
    "url": "assets/js/3.647747c2.js",
    "revision": "708d43db224197c13e03a63a80a6449e"
  },
  {
    "url": "assets/js/4.5b1fb5a1.js",
    "revision": "42c1348e138e3d6d50b1ee4df027125a"
  },
  {
    "url": "assets/js/5.fba38f3f.js",
    "revision": "8b8f6219e57ba0713f76f2818800a683"
  },
  {
    "url": "assets/js/6.0018bc76.js",
    "revision": "01b0d0860e776bd0f6ea007dbfb3c3dc"
  },
  {
    "url": "assets/js/7.1f9882ea.js",
    "revision": "386bfe68d0eb8a9b8680b51a65e664d2"
  },
  {
    "url": "assets/js/8.33b2fcd3.js",
    "revision": "f860d131ef6e02dc79665824b02e7ecc"
  },
  {
    "url": "assets/js/app.f2fa879a.js",
    "revision": "2e153d31222be8d33c28cce0efd56f50"
  },
  {
    "url": "finish.html",
    "revision": "abc744bfcbbe7fe6c069c8e9039e356c"
  },
  {
    "url": "icon-192.png",
    "revision": "4956efdb11ba7bb7f50fb5f8ba338364"
  },
  {
    "url": "icon.png",
    "revision": "0d8e870589ac6ef5785b50e5367f6a7a"
  },
  {
    "url": "icon.svg",
    "revision": "e50f8d5f32a008c98c3d92887decd246"
  },
  {
    "url": "index.html",
    "revision": "d9b167de902a06e6f515f19fd33f8efd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
