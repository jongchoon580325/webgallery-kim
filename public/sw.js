const CACHE_NAME = 'smart-photo-gallery-cache-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/deacon_kim_01.ico',
  '/deacon_kim_open_graph_image_02.png',
  // 기타 정적 리소스 필요시 추가
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
}); 