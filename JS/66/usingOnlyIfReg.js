'use strict';

function onlyIf(arr, testFunc, actionFunc) {
    for (let i = 0; i < arr.length; i++) {
        if (testFunc(arr[i])) {
            actionFunc(arr[i]);
        }
    }
}

function isUpperCase(letter) {
    return letter === letter.toUpperCase();
}

function logLetter(letter) {
    console.log(letter);
}

const letters = ['A', 'B', 'c'];

onlyIf(letters, isUpperCase, logLetter);