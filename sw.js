if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const a=e=>n(e,o),c={module:{uri:o},exports:r,require:a};s[o]=Promise.all(i.map((e=>c[e]||a(e)))).then((e=>(l(...e),r)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"35fa41560020b3c4c07640466ad8ed0d"},{url:"assets/ajax-loader-e7b44c86.gif",revision:null},{url:"assets/fredoka-one-latin-400-normal-497c578e.woff",revision:null},{url:"assets/fredoka-one-latin-400-normal-e9986c62.woff2",revision:null},{url:"assets/index-121f2794.css",revision:null},{url:"assets/index-9225e721.js",revision:null},{url:"assets/project-icon-6b468a6c.png",revision:null},{url:"assets/project-icon-75ca807c.png",revision:null},{url:"assets/project-icon-825c50ca.png",revision:null},{url:"assets/project-icon-b9444b48.png",revision:null},{url:"assets/project-icon-c10603c2.png",revision:null},{url:"assets/quicksand-latin-400-normal-9ccbf89c.woff",revision:null},{url:"assets/quicksand-latin-400-normal-e3616551.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-3bc49e2e.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-b71c0122.woff",revision:null},{url:"assets/slick-12459f22.svg",revision:null},{url:"assets/testimonial-photo-be390461.png",revision:null},{url:"assets/testimonial-photo-e621084a.png",revision:null},{url:"assets/testimonial-photo-ffb2bb10.png",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"favicon.ico",revision:"f617ae4dec020fab3418f990b6f4197f"},{url:"index.html",revision:"d3fdd4c96f4196d70834ba2645bd0996"},{url:"logo.png",revision:"c1c0bccd28c5a40cd48b51af296d37c2"},{url:"manifest.webmanifest",revision:"ebf4f80d01b2496acd3d8a93a1235053"},{url:"maskable-icon-512x512.png",revision:"8abcab04fd375a2f917cc94f31ec2f1e"},{url:"pwa-192x192.png",revision:"0dc8d625d6f88044d3b2000d73f4d5ff"},{url:"pwa-512x512.png",revision:"a3e1ff2263cb7c96766e99c323b6f8d3"},{url:"pwa-64x64.png",revision:"d5f05b03fd9baecb86f08e01360a0381"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-64x64.png",revision:"d5f05b03fd9baecb86f08e01360a0381"},{url:"pwa-192x192.png",revision:"0dc8d625d6f88044d3b2000d73f4d5ff"},{url:"pwa-512x512.png",revision:"a3e1ff2263cb7c96766e99c323b6f8d3"},{url:"maskable-icon-512x512.png",revision:"8abcab04fd375a2f917cc94f31ec2f1e"},{url:"manifest.webmanifest",revision:"ebf4f80d01b2496acd3d8a93a1235053"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/$/]}))}));
