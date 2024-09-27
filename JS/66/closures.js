"use strict"

greet()

function greet() {
    console.log("Hello");
}

greet();

const doGreet = function () {
    console.log("Hello 2");
};

doGreet()
function getGreeter() {
    return function () {
        console.log("Hello 3");
    };
}
const theGreeter = getGreeter();
theGreeter();
function getBetterGreeter() {
    return function (name) {
        console.log(`Hello ${name}`);
    };
}
const betterGreeter = getBetterGreeter()
betterGreeter("Kamala");

function getBestGreeter() {
    return function () {
        console.log(`Hello ${name}`);
    };
}
const bestGreeter = getBestGreeter("Donald");
bestGreeter()
console.log("done");
/////////