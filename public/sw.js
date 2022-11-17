self.addEventListener('install',function(event){
    console.log('[Service worker] Installing',event);
})

self.addEventListener('activate',function(event){
    console.log('[Service worker] Activating',event);
    return self.clients.claim();
})

// Non-lifecycle events
self.addEventListener('fetch',function(event){
    console.log('[Service worker] Fetching',event);
    // for responding with customised fetch rqeuests
    event.respondWith(fetch(event.request));
});