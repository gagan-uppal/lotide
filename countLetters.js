let assertEqual = function(actual, expected) {
  if ( actual === expected ){
   // console.log("👍Assertion Passed: [" + actual + "] === [" + expected + "]");
console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
  console.log("🛑Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }

};

function countLetters(string){
const count = {};

string.split('').forEach(char => {
  count[char] = count[char] ? (count[char] + 1) : 1;
  
});

return count;

};

//assertEqual(countLetters('LHL'));
assertEqual((countLetters('LHL')).L,2);