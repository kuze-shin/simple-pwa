// Attach event listener safely
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("output").textContent = "Starting...";
});

// Register service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => console.log("Service Worker registered"))
            .catch(err => console.error("Service Worker failed", err));
    });
}
