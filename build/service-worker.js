"use strict";var precacheConfig=[["/2018/index.html","c30da70dc28ba39e75d2eeec5c999e5e"],["/2018/static/css/main.d6b7b1cb.css","909beb33306b649aa504138b190c0eb7"],["/2018/static/js/main.a75e8404.js","dafbf0a398c39790c5f03518e1244417"],["/2018/static/media/ProximaNova-Semibold.30868fc5.woff2","30868fc5cf6f1310019b3379d649490a"],["/2018/static/media/ProximaNova-Semibold.61ad5984.ttf","61ad59846ac9367ae67c53e55bd5b9f8"],["/2018/static/media/ProximaNova-Semibold.fa510f0c.woff","fa510f0c6100f456ecf591c7df8208eb"],["/2018/static/media/ProximaNovaA-Black.70611e19.woff2","70611e199c176628cceb8872d6c2b331"],["/2018/static/media/ProximaNovaA-Black.8e16f2c1.ttf","8e16f2c129d06d748606d14fd9ae844e"],["/2018/static/media/ProximaNovaA-Black.93ca0641.woff","93ca06410852b7f78aaf521b54644819"],["/2018/static/media/ProximaNovaA-Bold.4161bffe.woff","4161bffe354eaa759e147f92a05fc9d1"],["/2018/static/media/ProximaNovaA-Bold.512305aa.ttf","512305aa309420141bbb051dd7c4001a"],["/2018/static/media/ProximaNovaA-Bold.84fcb2be.woff2","84fcb2be75b3816abecb1a0dce54de88"],["/2018/static/media/ProximaNovaA-Regular.1e8c3b0f.woff2","1e8c3b0f65be4f44d17844aafbac708d"],["/2018/static/media/ProximaNovaA-Regular.6e8adc60.woff","6e8adc606615b54f23f8439c2efaa81d"],["/2018/static/media/ProximaNovaA-Regular.b152c430.ttf","b152c4305f67f4298690935734b3e70f"],["/2018/static/media/ProximaNovaACond-Semibold.58749c25.woff","58749c2518ed858ee8b272e9d3f9015d"],["/2018/static/media/ProximaNovaACond-Semibold.84ea8fbf.ttf","84ea8fbff8da53f050d2ad25d17b3a06"],["/2018/static/media/ProximaNovaACond-Semibold.ab62b1c7.woff2","ab62b1c75c7f63265c148e3672d3f125"],["/2018/static/media/ProximaNovaS-Thin.0bc9ec24.woff2","0bc9ec243abd5c11fc40e887748aae13"],["/2018/static/media/ProximaNovaS-Thin.2485d426.ttf","2485d426176ed785c2b951b29c471ea0"],["/2018/static/media/ProximaNovaS-Thin.c8eb75b7.woff","c8eb75b736d6de6a913c4d74e971a790"],["/2018/static/media/ProximaNovaT-Thin.6261e8b4.woff","6261e8b4f1078325c4bbd9445906945c"],["/2018/static/media/ProximaNovaT-Thin.9fc37a54.woff2","9fc37a5439387ce39ac4bad1ba4a30e7"],["/2018/static/media/ProximaNovaT-Thin.f2571e10.ttf","f2571e109e51f562133c9845a88da067"],["/2018/static/media/arrow-left.73376cd6.png","73376cd6da034a36d3a6fbd70d8927d9"],["/2018/static/media/loading-branco.e75d52ee.svg","e75d52ee946698107ac74ede270f15e2"],["/2018/static/media/menu.30e576d6.svg","30e576d66c66374b8be9008857cf0247"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/2018/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});