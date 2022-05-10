self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('mrt-store').then((cache) => cache.addAll([
            './',
            './index.htm',
            './index.js',
            './avatar.jpg'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});