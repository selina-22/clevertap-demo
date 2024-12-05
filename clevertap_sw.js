// Log when service worker is installed
self.addEventListener("install", function (event) {
  console.log("Service Worker installed");
});

// Log when service worker is activated
self.addEventListener("activate", function (event) {
  console.log("Service Worker activated");
});

// Handle push events
self.addEventListener("push", function (event) {
  console.log("Push received:", event);
});

// Import CleverTap service worker script
importScripts("https://d2r1yp2w7bby2u.cloudfront.net/js/clevertap_sw.js");
