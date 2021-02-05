"use strict";
console.log('Loading');
/*function assetRender() {
    var assets = '';
    var assetFolders = ['js', 'css', 'Pages'];
    for (var x = 0; x < assetFolders.length; x++) {
        assests += _getAllFilesFromFolder(assetFolders[x]);
    }

    return assests;
}

var _getAllFilesFromFolder = function (dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function (file) {

        file = dir + '/' + file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};*/
//;http://localhost:5000
var serviceWorkerVersion = 'v5::';
//TODO: Add fucntion to populate assest by traversing selected folders
//TODO: Show an example with minumal assests

var offlineAssets = ['',
    'css/site.css',
    'favicon.ico',
    'js/site.js',
    'lib/jquery/dist/jquery.min.js',
    'lib/bootstrap/dist/js/bootstrap.bundle.min.js',
    'lib/bootstrap/dist/css/bootstrap.min.css']; //assetRender()

//];

console.log('Service Worker: Running!');

//Service Worker install event

self.addEventListener('install', function (event) {
    self.skipWaiting();//Function to remove the older service worker version

    console.log('Service Worker: Install in Progress!');
    event.waitUntil(
        caches.open(serviceWorkerVersion + 'offlineAssets')
            .then(function(cache){
            return cache.addAll(offlineAssets);
        })
    );
});

//Service Worker fetch event

self.addEventListener("fetch", function (event) {
    console.log('Service Worker: Fetch in Progress!');

    //Only fetch on get requests and ingnore all others  
  //  if (event.request.method !== 'GET') {
  //      return;
   // }
   
    event.respondWith(caches.match(event.request).then(function (cached) {
                
                var networkEvent = fetch(event.request).then(fetchedFromNetwork, unableToResolve).catch(unableToResolve);
                return cached || networkEvent;

                function fetchedFromNetwork(response) {
                    var cacheCopy = response.clone();
                    caches.open(version + 'pages').then(function add(cache) {

                            return cache.put(event.request, cacheCopy);
                        }).then(function () {
                            console.log('Service Worker: Fetch Stored in Cache!', event.request.url);
                        });

                    return response;
                }
 
                function unableToResolve() {
                    
                    console.log('Service Worker: Fetch Failed! Network Issue or No Updates');
                    return new Response('<h1>Service Unavailable!</h1>', {
                        status: 503,
                        statusText: 'Service Unavailable',
                        headers: new Headers({
                            'Content-Type': 'text/html'
                        })
                    });
                }
            })
    );
});

//Service Worker activate event
self.addEventListener("activate", function (event) {
    console.log('Service Worker: Activate in Progress!');

    event.waitUntil(
        caches.keys().then(function (keys) {
                return Promise.all(keys.filter(function (key) {
                    return !key.startsWith(serviceWorkerVersion);
                        }).map(function (key) {
                            return caches.delete(key);
                        })
                );
            })
            .then(function () {
                console.log('Service Worker: Activate Finished!');
            })
    );
});