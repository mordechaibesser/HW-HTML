
(function (global) {
    global.app.counterFactory = (() => {
        let counterCount = 0;

        return {
            createCounter() {
                counterCount++;
                let count = 0;

                return {
                    increment() {
                        count++;
                    },
                    getCount() {
                        return count;
                    }
                };
            },
            getCounterCount() {
                return counterCount;
            }
        };
    })();
})(window);

// SL - again, why the double IIFE, though cute what you did there with window/global...
// SL - nice!
