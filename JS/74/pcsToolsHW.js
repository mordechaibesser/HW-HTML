window.pcs = function (selector) {
    'use strict';

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    function getCss(element, property) {
        return getComputedStyle(element)[property];
    }

    function on(element, event, callback) {
        element.addEventListener(event, callback);
    }

    const element = document.querySelector(selector);
    const dataStore = {}; // Data storage object for elements

    return {
        css: function (property, value) {
            if (arguments.length === 2) {
                setCss(element, property, value);
                return this;
            } else {
                return getCss(element, property);
            }
        },
        hide: function () {
            setCss(element, 'display', 'none');
            return this;
        },
        show: function () {
            setCss(element, 'display', 'block');
            return this;
        },
        on: function (event, callback) {
            on(element, event, callback);
            return this;
        },
        click: function (callback) {
            on(element, 'click', callback);
            return this;
        },
        flash: function (duration, speed = 5000) {
            const originalColor = getCss(element, 'background-color');
            let flashInterval;
            let elapsedTime = 0;

            function toggleColor() {
                const currentColor = getCss(element, 'background-color');
                setCss(element, 'background-color', currentColor === 'red' ? originalColor : 'purple');
            }

            flashInterval = setInterval(() => {
                elapsedTime += speed;
                if (elapsedTime >= duration) {
                    clearInterval(flashInterval);
                    setCss(element, 'background-color', originalColor);
                } else {
                    toggleColor();
                }
            }, speed);

            return this;
        },
        data: function (key, value) {
            if (arguments.length === 2) {
                dataStore[key] = value;
                return this;
            } else {
                return dataStore[key];
            }
        }
    };
};