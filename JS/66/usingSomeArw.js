'use strict';

const customSome = (arr, testFunc) => {
    for (let i = 0; i < arr.length; i++) {
        if (testFunc(arr[i])) {
            return true;
        }
    }
    return false;
};

const isUpperCase = (letter) => letter === letter.toUpperCase();
const isLowerCase = (letter) => letter === letter.toLowerCase();

const letters1 = ['A', 'B', 'C'];
const letters2 = ['a', 'B', 'c'];

console.log(customSome(letters1, isUpperCase));
console.log(customSome(letters2, isUpperCase));
console.log(customSome(letters1, isLowerCase));
console.log(customSome(letters2, isLowerCase));

console.log(letters1.some(isUpperCase));
console.log(letters2.some(isUpperCase));
console.log(letters1.some(isLowerCase));
console.log(letters2.some(isLowerCase)); 