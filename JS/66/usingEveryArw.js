'use strict';

const customEvery = (arr, testFunc) => {
    for (let i = 0; i < arr.length; i++) {
        if (!testFunc(arr[i])) {
            return false;
        }
    }
    return true;
};

const isUpperCase = (letter) => letter === letter.toUpperCase();
const isLowerCase = (letter) => letter === letter.toLowerCase();

const letters1 = ['A', 'B', 'C'];
const letters2 = ['a', 'B', 'c'];

console.log(customEvery(letters1, isUpperCase)); // true
console.log(customEvery(letters2, isUpperCase)); // false
console.log(customEvery(letters1, isLowerCase)); // false
console.log(customEvery(letters2, isLowerCase)); // false

console.log(letters1.every(isUpperCase)); // true
console.log(letters2.every(isUpperCase)); // false
console.log(letters1.every(isLowerCase)); // false
console.log(letters2.every(isLowerCase)); // false