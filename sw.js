if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const a=e=>n(e,o),c={module:{uri:o},exports:r,require:a};s[o]=Promise.all(i.map((e=>c[e]||a(e)))).then((e=>(l(...e),r)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"be56d672e179ebb378364726b779aac6"},{url:"assets/ajax-loader-e7b44c86.gif",revision:null},{url:"assets/fredoka-one-latin-400-normal-497c578e.woff",revision:null},{url:"assets/fredoka-one-latin-400-normal-e9986c62.woff2",revision:null},{url:"assets/index-168a9108.js",revision:null},{url:"assets/index-68c161b6.css",revision:null},{url:"assets/project-icon-6b468a6c.png",revision:null},{url:"assets/project-icon-75ca807c.png",revision:null},{url:"assets/project-icon-825c50ca.png",revision:null},{url:"assets/project-icon-b9444b48.png",revision:null},{url:"assets/project-icon-c10603c2.png",revision:null},{url:"assets/quicksand-latin-400-normal-9ccbf89c.woff",revision:null},{url:"assets/quicksand-latin-400-normal-e3616551.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-3bc49e2e.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-b71c0122.woff",revision:null},{url:"assets/slick-12459f22.svg",revision:null},{url:"assets/testimonial-photo-be390461.png",revision:null},{url:"assets/testimonial-photo-e621084a.png",revision:null},{url:"assets/testimonial-photo-ffb2bb10.png",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"favicon.ico",revision:"64f805e45b8bde18e4c8f52dd7c1549e"},{url:"index.html",revision:"e5239b8713d5b20bc4a855b443e781c1"},{url:"logo.png",revision:"fcfbfde83af04c2bd36807da8b69df99"},{url:"manifest.webmanifest",revision:"ebf4f80d01b2496acd3d8a93a1235053"},{url:"maskable-icon-512x512.png",revision:"df287d098e26d208478ef6fcb89c9d36"},{url:"pwa-192x192.png",revision:"81e840d80d9d99a45adfcabf25c639b2"},{url:"pwa-512x512.png",revision:"ced0c7bed5c79bff663fb413e541638d"},{url:"pwa-64x64.png",revision:"71aafb852ed909db715e082a8ab15117"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-64x64.png",revision:"71aafb852ed909db715e082a8ab15117"},{url:"pwa-192x192.png",revision:"81e840d80d9d99a45adfcabf25c639b2"},{url:"pwa-512x512.png",revision:"ced0c7bed5c79bff663fb413e541638d"},{url:"maskable-icon-512x512.png",revision:"df287d098e26d208478ef6fcb89c9d36"},{url:"manifest.webmanifest",revision:"ebf4f80d01b2496acd3d8a93a1235053"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/$/]}))}));