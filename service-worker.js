if(!self.define){let a,e={};const s=(s,r)=>(s=new URL(s+".js",r).href,e[s]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=s,a.onload=e,document.head.appendChild(a)}else a=s,importScripts(s),e()})).then((()=>{let a=e[s];if(!a)throw new Error(`Module ${s} didn’t register its module`);return a})));self.define=(r,t)=>{const o=a||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let n={};const l=a=>s(a,o),i={module:{uri:o},exports:n,require:l};e[o]=Promise.all(r.map((a=>i[a]||l(a)))).then((a=>(t(...a),n)))}}define(["./workbox-2d118ab0"],(function(a){"use strict";a.setCacheNameDetails({prefix:"vue-default-ts"}),self.addEventListener("message",(a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()})),a.precacheAndRoute([{url:"/canvas-game-tutorial/css/104.e8c74785.css",revision:null},{url:"/canvas-game-tutorial/css/555.bc2b8083.css",revision:null},{url:"/canvas-game-tutorial/css/556.eb978f64.css",revision:null},{url:"/canvas-game-tutorial/css/744.efcf8d4d.css",revision:null},{url:"/canvas-game-tutorial/css/750.8d8687a3.css",revision:null},{url:"/canvas-game-tutorial/css/83.220b9a4e.css",revision:null},{url:"/canvas-game-tutorial/css/879.dd5dd3c7.css",revision:null},{url:"/canvas-game-tutorial/css/app.967c7630.css",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Bold.08288dcf.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Bold.878c326d.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Bold.acc9abf8.ttf",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Bold.d926ce1c.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Italic.0a14a4da.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Italic.41e11650.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Italic.540281e0.ttf",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Italic.81f3bd04.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-LightItalic.1a161bbf.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-LightItalic.b04ad559.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-LightItalic.c0403213.ttf",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-LightItalic.dfccc228.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Medium.0f118011.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Medium.2653f9bc.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Medium.7a266c62.ttf",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Medium.b54c6fc6.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Regular.031162ee.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Regular.346e28f1.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Regular.455cefb6.ttf",revision:null},{url:"/canvas-game-tutorial/fonts/Lato-Regular.681e67b9.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Bold.bd442a3f.ttf",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Bold.e24ce7b9.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Bold.e889620a.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Bold.f0604d10.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Light.8d995187.ttf",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Light.963c75b5.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Light.f789dee1.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Light.fdf00fb2.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Medium.27dc4606.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Medium.2bd78d54.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Medium.c0168ef1.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Medium.fc9e7602.ttf",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Regular.02c14886.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Regular.185cffaa.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Regular.6e508c9d.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-Regular.b79ae738.ttf",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-SemiBold.1e667146.eot",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-SemiBold.2c2f5512.woff2",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-SemiBold.344d3c08.woff",revision:null},{url:"/canvas-game-tutorial/fonts/Montserrat-SemiBold.5767cc2f.ttf",revision:null},{url:"/canvas-game-tutorial/img/Montserrat-Bold.af958b6c.svg",revision:null},{url:"/canvas-game-tutorial/img/Montserrat-Light.23be7c65.svg",revision:null},{url:"/canvas-game-tutorial/img/Montserrat-Medium.4f7d40db.svg",revision:null},{url:"/canvas-game-tutorial/img/Montserrat-Regular.e6a92bbf.svg",revision:null},{url:"/canvas-game-tutorial/img/Montserrat-SemiBold.501dff99.svg",revision:null},{url:"/canvas-game-tutorial/index.html",revision:"0be4c743961e9c132098b9b5677351c2"},{url:"/canvas-game-tutorial/js/104.ef0e72d4.js",revision:null},{url:"/canvas-game-tutorial/js/555.ac11cc22.js",revision:null},{url:"/canvas-game-tutorial/js/556.6971ee75.js",revision:null},{url:"/canvas-game-tutorial/js/744.8ecb27a1.js",revision:null},{url:"/canvas-game-tutorial/js/750.2f437a33.js",revision:null},{url:"/canvas-game-tutorial/js/83.6ef74ee0.js",revision:null},{url:"/canvas-game-tutorial/js/879.e1921ffd.js",revision:null},{url:"/canvas-game-tutorial/js/app.c4246135.js",revision:null},{url:"/canvas-game-tutorial/js/chunk-vendors.457130c1.js",revision:null},{url:"/canvas-game-tutorial/manifest.json",revision:"27fd31cc1562f9fb0e0d2bacb48edb63"},{url:"/canvas-game-tutorial/resourses/sounds/Fire impact 1.wav",revision:"7bf3c9117b8d4bb741b2772b3ddebad5"},{url:"/canvas-game-tutorial/resourses/sounds/Healing Full.wav",revision:"60692db2365a5f9d2105fd377f4a9c94"},{url:"/canvas-game-tutorial/resourses/sounds/Ice attack 2.wav",revision:"15fbc573a75565858153fbf6a72c41f0"},{url:"/canvas-game-tutorial/resourses/sounds/Misc 02.wav",revision:"fc7b2e0c97c49401f0c13863a40c650b"},{url:"/canvas-game-tutorial/resourses/sounds/Wind effects 5.wav",revision:"a7dc161cf31663678b3335549750138e"},{url:"/canvas-game-tutorial/resourses/sprites/boom.png",revision:"6094aac13847978aeec8f6e7cd1fc060"},{url:"/canvas-game-tutorial/resourses/sprites/enemy1.png",revision:"b427cb7887fcb7cee792eefc85ef8b93"},{url:"/canvas-game-tutorial/resourses/sprites/enemy2.png",revision:"e5805c246cf5ea595feaa373e5bc9dbc"},{url:"/canvas-game-tutorial/resourses/sprites/enemy3.png",revision:"9ed6e0951b2bb75fe200caa5e5c5b6fa"},{url:"/canvas-game-tutorial/resourses/sprites/enemy4.png",revision:"2429a011f480167c89661d53c2238fbf"},{url:"/canvas-game-tutorial/resourses/sprites/enemy_ghost.png",revision:"a6905631dc68b9ca925f99960066eb8b"},{url:"/canvas-game-tutorial/resourses/sprites/enemy_spider.png",revision:"a8a9a7243a66f703fc3ae931a8bf323e"},{url:"/canvas-game-tutorial/resourses/sprites/enemy_worm.png",revision:"e2932852a2603443670eee29587189cf"},{url:"/canvas-game-tutorial/resourses/sprites/layer-1.png",revision:"dc663e571655214c0d1bb746fe55b121"},{url:"/canvas-game-tutorial/resourses/sprites/layer-2.png",revision:"24919d77f83d9207ed6e8853c211c596"},{url:"/canvas-game-tutorial/resourses/sprites/layer-3.png",revision:"3c41c7254872aba42ae9ff062048c8d0"},{url:"/canvas-game-tutorial/resourses/sprites/layer-4.png",revision:"1ef23d11db86653b3f301328e9541deb"},{url:"/canvas-game-tutorial/resourses/sprites/layer-5.png",revision:"444658dbde7cd6d0e7deadcb3bb31854"},{url:"/canvas-game-tutorial/resourses/sprites/raven.png",revision:"4b85e2abdf5f11cf1115e9f90a130ab7"},{url:"/canvas-game-tutorial/resourses/sprites/scroller/background.png",revision:"9e8c0cb9c7133a377cac7df7883e21aa"},{url:"/canvas-game-tutorial/resourses/sprites/scroller/enemy.png",revision:"08fe219ac5fd5770609578a13b8995a8"},{url:"/canvas-game-tutorial/resourses/sprites/scroller/player.png",revision:"7597de7a035d37b213ed8f55d02def82"},{url:"/canvas-game-tutorial/resourses/sprites/shadow_dog.png",revision:"d1ab0f53338baabb40af7e7740831966"},{url:"/canvas-game-tutorial/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
