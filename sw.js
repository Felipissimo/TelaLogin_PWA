const CACHE_NAME = 'repo-pwa-v1';


const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './inicio.html'
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache aberto com sucesso!');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});


self.addEventListener('activate', (event) => {
  console.log('Service Worker ativo.');
});


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      
      return response || fetch(event.request);
    })
  );
});