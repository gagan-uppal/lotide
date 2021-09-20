const eqArrays = require('../eqArrays');



let assertArraysEqual = function(arr1, arr2) {
  //if array is same
  if ( eqArrays(arr1, arr2) ){
   // console.log("👍Assertion Passed: [" + actual + "] === [" + expected + "]");
console.log(`Assertion passed: ${arr1} === ${arr2}`)
  } else {
  console.log("🛑Assertion Failed: [" + arr1 + "] !== [" + arr2 + "]");
  }

};

module.exports = assertArraysEqual;

/*const eqArrays = function (arr1, arr2){
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  
  let result = false;
  
  if (arr1Length === arr2Length){
    result = true;
    for(let i = 0; i < arr1Length; i++){
      if(arr1[i] === arr2[i]){
        result = true;
        continue;
      } else {
        result = false;
      }
    }
  }
  
  return result;

  };*/

  /*assertArraysEqual([],[]);
  assertArraysEqual([2,3,4],[]);
  assertArraysEqual([2,3,4],[2,3,4]);
  assertArraysEqual([],[2,3,4]);*/
  //assertArraysEqual([], undefined);



