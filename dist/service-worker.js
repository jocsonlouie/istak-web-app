if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"istak"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.6641abfa.css",revision:null},{url:"index.html",revision:"13c5ec342d41fb8767e1eeb1ed459ec9"},{url:"js/about.fc618803.js",revision:null},{url:"js/app.9385f615.js",revision:null},{url:"js/chunk-vendors.8d9e8ace.js",revision:null},{url:"manifest.json",revision:"f539bba0a627cd4b541572ebb7fe6045"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
