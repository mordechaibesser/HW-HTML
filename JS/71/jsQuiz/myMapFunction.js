"use strict"
function myMap(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}


function double(value) {
  return value * 2;
}

const originalArray = [2, 4, 6];

const newArray = myMap(originalArray, double);

console.log("Original Array:", originalArray);
console.log("New Array:", newArray);

// SL - nice (would have been nice to wrap all in an IIFE so no globals)
