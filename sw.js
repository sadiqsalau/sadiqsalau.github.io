if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const t=e=>n(e,o),c={module:{uri:o},exports:r,require:t};s[o]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(l(...e),r)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/fredoka-one-latin-400-normal-497c578e.woff",revision:null},{url:"assets/fredoka-one-latin-400-normal-e9986c62.woff2",revision:null},{url:"assets/index-4e862bd1.css",revision:null},{url:"assets/index-52df6516.js",revision:null},{url:"assets/project-icon-6b468a6c.png",revision:null},{url:"assets/project-icon-75ca807c.png",revision:null},{url:"assets/project-icon-825c50ca.png",revision:null},{url:"assets/project-icon-b9444b48.png",revision:null},{url:"assets/project-icon-c10603c2.png",revision:null},{url:"assets/quicksand-latin-400-normal-9ccbf89c.woff",revision:null},{url:"assets/quicksand-latin-400-normal-e3616551.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-3bc49e2e.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-b71c0122.woff",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"index.html",revision:"3286897c28b7d03a7761754e53d0cb11"},{url:"logo.png",revision:"38ec31904da92a94ce08b48181dcbc19"},{url:"manifest.webmanifest",revision:"ebf4f80d01b2496acd3d8a93a1235053"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"manifest.webmanifest",revision:"ebf4f80d01b2496acd3d8a93a1235053"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/$/]}))}));