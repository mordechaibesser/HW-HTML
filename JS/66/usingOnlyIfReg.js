'use strict';

function onlyIf(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      console.log(arr[i]);
    }
  }
}

const letters = ['A', 'B', 'c'];

onlyIf(letters); 