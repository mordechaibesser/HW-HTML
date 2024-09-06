window.pcsTools = (function () {
    'use strict';

    function get(selector) {
        return document.querySelector(selector);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    function getCss(element, property) {
        return getComputedStyle(element)[property];
    }

    function on(element, event, callback) {
        element.addEventListener(event, callback);
    }


    function click(element, callback) {
        on(element, 'click', callback); // Reuse the `on` function with 'click' event
    }

    function hide(element) {
        setCss(element, 'display', 'none'); // Hide the element
    }

    function show(element) {
        setCss(element, 'display', 'inline-block'); // Show the element as inline-block
    }

    return {
        get,
        setCss,
        getCss,
        on,
        click,
        hide,
        show
    };

}());