if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("service-worker.js").then(function(reg) {
      console.log("✅ Service Worker registrato:", reg.scope);
    }, function(err) {
      console.log("❌ Service Worker non registrato:", err);
    });
  });
}
