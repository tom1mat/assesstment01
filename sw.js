const version = '1';
const cacheName = `assestment-app-V${version}`;

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('install', (event) =>{
    event.waitUntil(
      caches.open(cacheName).then((cache) =>{
        return cache.addAll([
          '/assets/jquery-3.3.1.js',
          '/assets/jquery.dataTables.min.js',
        ]);
      })
    );
});

const handleRequest =  async (request) =>{
  if(request.method !== 'GET')
    return;

  let response, cache;
  
  try {
    cache = await caches.open(cacheName);
    response = await cache.match(request);

    if(!response){
        response = await fetch(request);  

      if(!response.url.includes('/get/data-version'))
        cache.put(request, response.clone());
    }
  } catch (error) {
    console.log(error);
  }
  return response;
}

self.addEventListener('fetch', event => {
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
      return;
  }// To fix bug by Paul Irish => https://bugs.chromium.org/p/chromium/issues/detail?id=823392
  event.respondWith(handleRequest(event.request));
});
