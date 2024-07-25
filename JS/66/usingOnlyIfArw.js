'use strict';

const onlyIf = (arr) => {
  arr.forEach(element => {
    if (element === element.toUpperCase()) {
      console.log(element);
    }
  });
};

const letters = ['A', 'B', 'c'];

onlyIf(letters);