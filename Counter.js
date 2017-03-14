var Counter = (function () {

    // Component variables
    var counters = [];
    var duration;
    var fps;

    // Animate numbers
    var _update = function () {

        // Apply to all counters
        for (var i = 0, c; i < counters.length; i++) {
            c = counters[i];

            // Increase current value
            c.currentNumber += c.step;

            // Show current value on a page
            c.el.text(Math.round(c.currentNumber));
        }

        // Set final values and end the animation
        if (counters[0].currentNumber >= counters[0].finalNumber) {
            for (var i = 0, c; i < counters.length; i++) {
                c = counters[i];
                c.el.text(c.finalNumber);
            }
            return;
        }

        // Next iteration of animation
        setTimeout(function () {
            _update();
        }, 1000 / fps);

    };

    // Initialize Counter
    var init = function (options) {

        // Default options
        duration = options.duration || 2000;
        fps = options.fps || 30;

        options.el.find('.counter-number').each(function () {
            var $that = $(this);
            var finalNumber = parseInt($that.text(), 10);
            var step = finalNumber / (fps * duration / 1000);

            // Initialize each counter and push it to the array
            counters.push({
                el: $that,
                finalNumber: finalNumber,
                currentNumber: 0,
                step: step
            });
        });

        // Start the animation
        _update();

    };

    // Return public object
    return {
        init: init
    };

})();
