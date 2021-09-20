const assertEqual = require('./assertEqual');


/*let assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log("👍Assertion Passed: [" + actual + "] === [" + expected + "]");
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }

};*/

let tail = function(array) {
  let answer = [];

  for (let i = 1; i < array.length; i++) {
    answer.push(array[i]);
  //return array[i];
  }
  return answer;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!



module.exports = tail;
