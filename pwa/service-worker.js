if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,r,s)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+c.slice(1)};return Promise.all(r.map(c=>{switch(c){case"exports":return i;case"module":return n;default:return e(c)}})).then(e=>{const c=s(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa-quasar-timer"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"code.jpg",revision:"365aa94d300cf036c6978a5a0668c4fe"},{url:"css/2.0fe7105e.css",revision:"c14bf6e76756e8224250115544170760"},{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.fc7dd716.css",revision:"ed5893e662364b04f045c04c1dc3cbf0"},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.0d57c481.woff",revision:"9c4b4d0d5ef2ead1e086fd1f71e5eb84"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.ae520e14.woff2",revision:"df8803afe71155fa95130772bd0da593"},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"index.html",revision:"97167307800f9babfac86afca6d2b0de"},{url:"js/2.e69aa050.js",revision:"63b66fc6ef1368e196437425ecec1c2f"},{url:"js/3.72cca75b.js",revision:"2b2c3e0db5901756dc1655ca6e43c1f4"},{url:"js/4.32e62ce8.js",revision:"294cd5d5ad6177daefb1f46bc45781c7"},{url:"js/5.08539ec1.js",revision:"8bba2b886b9ce08acb675056a0a8e011"},{url:"js/6.b8a2c25c.js",revision:"1de167bd4524dd1e0a8ff68c11a99790"},{url:"js/app.45327776.js",revision:"7c9e94eae4eb7f333d700ecc6ba56ebe"},{url:"js/vendor.58eeb097.js",revision:"6f1eec57533620cef35c4121eb61cb09"},{url:"manifest.json",revision:"309c189cbb0011681447fd21eb894ccc"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
