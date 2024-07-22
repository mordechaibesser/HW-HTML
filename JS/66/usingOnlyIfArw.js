'use strict';

const onlyIf = (arr, testFunc, actionFunc) => {
    arr.forEach(element => {
        if (testFunc(element)) {
            actionFunc(element);
        }
    });
};

const isUpperCase = (letter) => letter === letter.toUpperCase();
const logLetter = (letter) => console.log(letter);

const letters = ['A', 'B', 'c'];

onlyIf(letters, isUpperCase, logLetter); 