let before = performance.now();
window.onload = function () {
    document.getElementById("load-stats").innerHTML =
        "Page load time is " + ((performance.now() - before) / 1000).toFixed(3) + "seconds";
}

