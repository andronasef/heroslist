if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>i(e,o),f={module:{uri:o},exports:t,require:c};s[o]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-21445d85"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.4267bc22.css",revision:null},{url:"assets/index.c597cf2d.js",revision:null},{url:"assets/vendor.ff42e0dc.js",revision:null},{url:"index.html",revision:"c1d813bf291c940cf1e19e41cb31cb59"},{url:"favicon.svg",revision:"8e9e65e942088b438f7523be86d5f320"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"572d18ccf9b7d6edf8828fa3171c69b6"},{url:"pwa-512x512.png",revision:"f85fd623fc60195b6a03694e56390d5e"},{url:"pwa-192x192.png",revision:"0ae1bc431882fe69840f965c3f11a8ce"},{url:"manifest.webmanifest",revision:"570909b8af6520717398067739553d71"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
