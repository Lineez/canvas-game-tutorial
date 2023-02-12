(function(){"use strict";var e={896:function(e,n,t){var r=t(963),o=t(136),i=t(252);function a(e,n,t,r,o,a){var u=(0,i.up)("default-layer");return(0,i.wg)(),(0,i.j4)(u)}function u(e,n,t,r,o,a){var u=(0,i.up)("header-comp"),c=(0,i.up)("router-view"),f=(0,i.up)("footer-comp");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u),(0,i.Wm)(c),(0,i.Wm)(f)],64)}function c(e,n,t,r,o,a){return(0,i.wg)(),(0,i.iD)("footer")}var f=(0,i.aZ)({}),s=t(744);const l=(0,s.Z)(f,[["render",c]]);var d=l,m=t(577),p={class:"nav"};function v(e,n,t,r,o,a){var u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("nav",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.routes,(function(e){return(0,i.wg)(),(0,i.j4)(u,{key:e.name,to:e.path},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,m.zw)(e.name),1)]})),_:2},1032,["to"])})),128))])])}var h=t(119),g=[{path:"/",name:"SpriteAnimation",component:function(){return t.e(744).then(t.bind(t,128))}},{path:"/parallaxBackground",name:"ParallaxBackground",component:function(){return t.e(750).then(t.bind(t,750))}},{path:"/enemyMovement",name:"EnemyMovement",component:function(){return t.e(556).then(t.bind(t,556))}},{path:"/animateWithSound",name:"AnimateWithSound",component:function(){return t.e(83).then(t.bind(t,83))}},{path:"/clickerGame",name:"ClickerGame",component:function(){return t.e(879).then(t.bind(t,879))}},{path:"/moreEnemy",name:"MoreEnemy",component:function(){return t.e(104).then(t.bind(t,104))}},{path:"/scrollerGame",name:"ScrollerGame",component:function(){return t.e(555).then(t.bind(t,555))}}],b=(0,h.p7)({history:(0,h.PO)("/canvas-game-tutorial/"),routes:g}),y=b,w=(0,i.aZ)({data:function(){return{routes:g}}});const k=(0,s.Z)(w,[["render",v]]);var C=k,O=(0,i.aZ)({components:{FooterComp:d,HeaderComp:C}});const E=(0,s.Z)(O,[["render",u]]);var j=E,A=(0,i.aZ)({components:{DefaultLayer:j}});const S=(0,s.Z)(A,[["render",a]]);var _=S,N=t(205);(0,N.z)("".concat("/canvas-game-tutorial/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var P={name:"focus",mounted:function(e){e.focus()}},T={name:"intersection",mounted:function(e,n){function t(e){e[0].isIntersecting&&n.value()}new IntersectionObserver(t.bind(this),{rootMargin:"0px",threshold:1}).observe(e)}},x=[P,T],Z=(0,r.ri)(_);x.forEach((function(e){Z.directive(e.name,e)}));var B=(0,o.WB)();Z.use(y).use(B).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{83:"6ef74ee0",104:"ef0e72d4",555:"ac11cc22",556:"6971ee75",744:"8ecb27a1",750:"2f437a33",879:"e1921ffd"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{83:"220b9a4e",104:"e8c74785",555:"bc2b8083",556:"eb978f64",744:"efcf8d4d",750:"8d8687a3",879:"dd5dd3c7"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-default-ts:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/canvas-game-tutorial/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={83:1,104:1,555:1,556:1,744:1,750:1,879:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkvue_default_ts"]=self["webpackChunkvue_default_ts"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(896)}));r=t.O(r)})();
//# sourceMappingURL=app.c4246135.js.map