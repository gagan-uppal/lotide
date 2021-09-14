let assertEqual = function(actual, expected) {
  if ( actual === expected ){
   // console.log("👍Assertion Passed: [" + actual + "] === [" + expected + "]");
console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
  console.log("🛑Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }

};
function eqArrays(arr1, arr2){
let arr1Length = arr1.length;
let arr2Length = arr2.length;

let result = false;

if (arr1Length === arr2Length){
  result=true;
  for(let i = 0; i < arr1Length; i++){
    if(arr1[i] === arr2[i]){
      result = true;
      continue;
    }else{
      result = false;
    }
  }
}

return result;

};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false  

assertEqual(eqArrays([], [1]), false); // => false
assertEqual(eqArrays([], []), true); // => true