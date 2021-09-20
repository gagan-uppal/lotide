/*let assertEqual = function(actual, expected) {
  if (actual === expected) {
   // console.log("👍Assertion Passed: [" + actual + "] === [" + expected + "]");
console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
  console.log("🛑Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }

};*/
const assertEqual = require('./assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//return the first element or undefined if array is empty
let head = function(array){
return array[0];
};
/*assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),undefined);
assertEqual(head([1]), 1);*/