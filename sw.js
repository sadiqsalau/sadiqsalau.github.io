if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const a=e=>l(e,r),u={module:{uri:r},exports:o,require:a};s[r]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"ceadc4f54c590d88128bd51217594ad4"},{url:"assets/ajax-loader-e7b44c86.gif",revision:null},{url:"assets/akmustech-de4d425b.webp",revision:null},{url:"assets/fredoka-one-all-400-normal-bc136881.woff",revision:null},{url:"assets/fredoka-one-latin-400-normal-e9986c62.woff2",revision:null},{url:"assets/index-85e658c9.css",revision:null},{url:"assets/index-c608a2ca.js",revision:null},{url:"assets/logo-68fb1487.webp",revision:null},{url:"assets/logo-e5a51571.webp",revision:null},{url:"assets/pluxmedianetwork-c9ea3f8c.webp",revision:null},{url:"assets/project-icon-0808cbad.webp",revision:null},{url:"assets/project-icon-2aeb545f.webp",revision:null},{url:"assets/project-icon-5a86b4b6.webp",revision:null},{url:"assets/project-icon-61fb43fc.webp",revision:null},{url:"assets/project-icon-6bb183c4.webp",revision:null},{url:"assets/project-icon-9656f14b.webp",revision:null},{url:"assets/project-icon-bb6e874b.webp",revision:null},{url:"assets/project-icon-caeb448b.webp",revision:null},{url:"assets/quicksand-all-400-normal-d9371f25.woff",revision:null},{url:"assets/quicksand-all-700-normal-745734be.woff",revision:null},{url:"assets/quicksand-latin-400-normal-e3616551.woff2",revision:null},{url:"assets/quicksand-latin-700-normal-3bc49e2e.woff2",revision:null},{url:"assets/quicksand-latin-ext-400-normal-bb022ef8.woff2",revision:null},{url:"assets/quicksand-latin-ext-700-normal-b8854b6a.woff2",revision:null},{url:"assets/slick-12459f22.svg",revision:null},{url:"assets/testimonial-photo-15f548e7.webp",revision:null},{url:"assets/testimonial-photo-757ec660.webp",revision:null},{url:"assets/testimonial-photo-a802f9b7.webp",revision:null},{url:"assets/twelvesquares-be58a973.webp",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"favicon.ico",revision:"4a70050b834fd9e1a9e7759a170b1f91"},{url:"index.html",revision:"660b80b0e5cd22ba3441107a34e628b9"},{url:"manifest.webmanifest",revision:"fea5b0567f32d2007e0ea72bbe29dfa7"},{url:"maskable-icon-512x512.png",revision:"23d6d46b1646f6f7f5cf78edf8783dfc"},{url:"pwa-192x192.png",revision:"23de62209677b55de423fa5353bbb13c"},{url:"pwa-512x512.png",revision:"2cb8eff54fb74d8a32c8513ee5854a8f"},{url:"pwa-64x64.png",revision:"f83e3b58173ed60d5e281339c6338430"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-64x64.png",revision:"f83e3b58173ed60d5e281339c6338430"},{url:"pwa-192x192.png",revision:"23de62209677b55de423fa5353bbb13c"},{url:"pwa-512x512.png",revision:"2cb8eff54fb74d8a32c8513ee5854a8f"},{url:"maskable-icon-512x512.png",revision:"23d6d46b1646f6f7f5cf78edf8783dfc"},{url:"manifest.webmanifest",revision:"fea5b0567f32d2007e0ea72bbe29dfa7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/$/]}))}));
