var $mainCounter = $('#counter-main');

// Initialize counter if exist on a page
if ($mainCounter.length) {
    Counter.init({
        el: $mainCounter,
        duration: 1000,
        fps: 60
    });
}
