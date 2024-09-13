(function (global) {

    for (let i = 0; i < 10; i++) {
        global.app.counter.increment();
    }


    const firstCounter = global.app.counterFactory.createCounter();
    const secondCounter = global.app.counterFactory.createCounter();


    for (let i = 0; i < 5; i++) {
        firstCounter.increment();
    }

    for (let i = 0; i < 15; i++) {
        secondCounter.increment();
    }

    console.log("Single Counter (should be 10):", global.app.counter.getCount());
    console.log("First Counter (should be 5):", firstCounter.getCount());
    console.log("Second Counter (should be 15):", secondCounter.getCount());
})(window);

// SL - nice!
// SL - Grade - 98
