if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let r={};const a=e=>i(e,l),c={module:{uri:l},exports:r,require:a};n[l]=Promise.all(s.map((e=>c[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"bdf5be967080e2c6e400d13eeabb1282"},{url:"assets/fredoka-one-latin-400-normal-497c578e.woff",revision:null},{url:"assets/fredoka-one-latin-400-normal-e9986c62.woff2",revision:null},{url:"assets/icon-6b468a6c.png",revision:null},{url:"assets/icon-825c50ca.png",revision:null},{url:"assets/icon-c10603c2.png",revision:null},{url:"assets/index-a3bb38c0.css",revision:null},{url:"assets/index-e59cb09e.js",revision:null},{url:"assets/quicksand-latin-400-normal-9ccbf89c.woff",revision:null},{url:"assets/quicksand-latin-400-normal-e3616551.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-3bc49e2e.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-b71c0122.woff",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"favicon.ico",revision:"999001df2e5ff3e5a7ab6e4d5a9e2837"},{url:"icon@128.png",revision:"8838840f6771bb12a0d35a1433d42a7c"},{url:"icon@192.png",revision:"ab33bf8d88e51cb4bcfd8b520db71dc7"},{url:"icon@512.png",revision:"38ec31904da92a94ce08b48181dcbc19"},{url:"index.html",revision:"622d130b1e06c2bf2a5ab3b1788f62aa"},{url:"manifest.webmanifest",revision:"6938138940a0e7a4eaf5a8125dfd8f3a"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"favicon.ico",revision:"999001df2e5ff3e5a7ab6e4d5a9e2837"},{url:"apple-touch-icon.png",revision:"bdf5be967080e2c6e400d13eeabb1282"},{url:"icon@192.png",revision:"ab33bf8d88e51cb4bcfd8b520db71dc7"},{url:"icon@512.png",revision:"38ec31904da92a94ce08b48181dcbc19"},{url:"manifest.webmanifest",revision:"6938138940a0e7a4eaf5a8125dfd8f3a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/$/]}))}));
