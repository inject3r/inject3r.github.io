'use strict';
const CACHE_PREFIX='cafe-sales-pwa-';
const CACHE_NAME=CACHE_PREFIX+'v1';
const BASE=new URL('./',self.registration.scope);
const APP_SHELL=[BASE.href,new URL('index.html',BASE).href,new URL('manifest.webmanifest',BASE).href,new URL('icon-192.png',BASE).href,new URL('icon-512.png',BASE).href];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).then(response=>{
      if(response&&response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(request,copy));}
      return response;
    }).catch(async()=>{
      const cache=await caches.open(CACHE_NAME);
      return await cache.match(request,{ignoreSearch:true})||await cache.match(BASE.href)||await cache.match(new URL('index.html',BASE).href);
    }));
    return;
  }
  event.respondWith(caches.match(request).then(cached=>{
    if(cached)return cached;
    return fetch(request).then(response=>{
      if(response&&response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(request,copy));}
      return response;
    });
  }));
});
