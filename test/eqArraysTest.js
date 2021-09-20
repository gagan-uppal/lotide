
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


console.log("started")
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
console.log("123")
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
console.log("123false")
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
console.log("123string")
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false  
console.log("stringfalse")
assertEqual(eqArrays([], [1]), false); // => false
console.log("empty1false")
assertEqual(eqArrays([], []), true); // => true
console.log("empty");
