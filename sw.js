if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const a=e=>i(e,o),f={module:{uri:o},exports:r,require:a};s[o]=Promise.all(n.map((e=>f[e]||a(e)))).then((e=>(l(...e),r)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"ceadc4f54c590d88128bd51217594ad4"},{url:"assets/ajax-loader-e7b44c86.gif",revision:null},{url:"assets/fredoka-one-latin-400-normal-497c578e.woff",revision:null},{url:"assets/fredoka-one-latin-400-normal-e9986c62.woff2",revision:null},{url:"assets/index-1819b46a.css",revision:null},{url:"assets/index-a6af25df.js",revision:null},{url:"assets/logo-68fb1487.webp",revision:null},{url:"assets/logo-e5a51571.webp",revision:null},{url:"assets/project-icon-0808cbad.webp",revision:null},{url:"assets/project-icon-2aeb545f.webp",revision:null},{url:"assets/project-icon-5a86b4b6.webp",revision:null},{url:"assets/project-icon-61fb43fc.webp",revision:null},{url:"assets/project-icon-9656f14b.webp",revision:null},{url:"assets/project-icon-bb6e874b.webp",revision:null},{url:"assets/quicksand-latin-400-normal-9ccbf89c.woff",revision:null},{url:"assets/quicksand-latin-400-normal-e3616551.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-3bc49e2e.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-b71c0122.woff",revision:null},{url:"assets/slick-12459f22.svg",revision:null},{url:"assets/testimonial-photo-15f548e7.webp",revision:null},{url:"assets/testimonial-photo-757ec660.webp",revision:null},{url:"assets/testimonial-photo-a802f9b7.webp",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"favicon.ico",revision:"4a70050b834fd9e1a9e7759a170b1f91"},{url:"index.html",revision:"f8c439c4f06819b626c4a9bd25291df6"},{url:"manifest.webmanifest",revision:"fea5b0567f32d2007e0ea72bbe29dfa7"},{url:"maskable-icon-512x512.png",revision:"23d6d46b1646f6f7f5cf78edf8783dfc"},{url:"pwa-192x192.png",revision:"23de62209677b55de423fa5353bbb13c"},{url:"pwa-512x512.png",revision:"2cb8eff54fb74d8a32c8513ee5854a8f"},{url:"pwa-64x64.png",revision:"f83e3b58173ed60d5e281339c6338430"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-64x64.png",revision:"f83e3b58173ed60d5e281339c6338430"},{url:"pwa-192x192.png",revision:"23de62209677b55de423fa5353bbb13c"},{url:"pwa-512x512.png",revision:"2cb8eff54fb74d8a32c8513ee5854a8f"},{url:"maskable-icon-512x512.png",revision:"23d6d46b1646f6f7f5cf78edf8783dfc"},{url:"manifest.webmanifest",revision:"fea5b0567f32d2007e0ea72bbe29dfa7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/$/]}))}));
