"use strict";

const letters = ['A', 'B', 'c'];

const isUpperCase = (letter) => letter === letter.toUpperCase();
const logLetter = (letter) => console.log(letter);

letters.filter(isUpperCase).forEach(logLetter); 