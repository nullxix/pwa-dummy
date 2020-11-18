const CACHE_NAME = 'ribbity2i4rg94h123418'

let cacheFiles = [
    '/',
    '/index.html',
    '/script.js',
    '/style.css',
    '/static'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(cacheFiles))
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    )
})