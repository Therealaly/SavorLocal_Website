if(!self.define){let e,o={};const i=(i,a)=>(i=new URL(i+".js",a).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(o[r])return;let l={};const d=e=>i(e,r),s={module:{uri:r},exports:l,require:d};o[r]=Promise.all(a.map((e=>s[e]||d(e)))).then((e=>(n(...e),l)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"267.bundle.js",revision:"f17bde8eee3723906e794c786a3d4e79"},{url:"314.bundle.js",revision:"0f598d0cbffbb93b65e9bc5fd9e1a9f4"},{url:"314.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"328.bundle.js",revision:"3544ac5c41a6d530dcaab1187884c22a"},{url:"46.bundle.js",revision:"2341057fbf7962e2bc0b606f429896c3"},{url:"559.bundle.js",revision:"7c763c1d12c89a93ea3f184a2b2d92af"},{url:"705.bundle.js",revision:"bb82bac6101c0312d971a69f3ec54eaa"},{url:"971.bundle.js",revision:"b4337809b6ff55529098ff15b7ef7d1c"},{url:"971.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"98.bundle.js",revision:"3c4bf0b3d00743398d348fa0d86ef8b8"},{url:"app.bundle.js",revision:"b145ae484dda3e6cfaac79f36504d4e1"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"7b69b5170bb7f5155fbd25d3d04deaf5"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"index.html",revision:"18f90385310e39029749ade34d55a645"},{url:"logo/icon-128.png",revision:"00807a04a29d7e0023bf51940fc35f94"},{url:"logo/icon-144.png",revision:"ae60a2827aedae5ee9409230ca653258"},{url:"logo/icon-152.png",revision:"4f79478a86c0d60869ca11a8872b2095"},{url:"logo/icon-192.png",revision:"4782518214caa2c7bac250931ea3bf01"},{url:"logo/icon-384.png",revision:"d03026f61204e9e3a3dac31f09a7b6ae"},{url:"logo/icon-512.png",revision:"542fc51a4ad48cdc5afa4cd59f229d02"},{url:"logo/icon-72.png",revision:"c8111734b7bfb3428481e7ba54ae65f4"},{url:"logo/icon-96.png",revision:"c653e46b83309a787c62e5c174e601fd"},{url:"logo/logo-black-no-background.svg",revision:"0d9009c352064886ff4279de9329a8a4"},{url:"logo/logo-black.svg",revision:"5375b87b6f717517ad3a8cfb255de0ab"},{url:"logo/logo-color-removebg.png",revision:"138558e8d929d888190a9f091b23fecc"},{url:"logo/logo-color.svg",revision:"2cd582044a432ae5099e7d8bb5a57efd"},{url:"logo/logo-sl-no-background.svg",revision:"05875d90f85eda6a9b669a3509c0e2f2"},{url:"logo/logo-white-no-background.svg",revision:"ab690539debc61024f5554e4fb06ae3a"},{url:"logo/logo-white.svg",revision:"7d2930232472e7f70a14480e815c8908"},{url:"logo/sl-favicon.png",revision:"1a01670c049ea06608e8f17bb55fc04a"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
