"use strict"
window.app = window.app || {};


(function () {
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
})();