"use strict"
window.app = window.app || {};

// SL - why the double IIFE? comment out first and last lines, same result...
// (function () {
    window.app.counter = (() => {
        let count = 0;

        return {
            increment() {
                count++;
            },
            getCount() {
                return count;
            }
        };
    })();
// })();

// SL - nice!
