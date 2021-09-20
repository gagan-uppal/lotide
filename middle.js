/*let assertArraysEqual = function(arr1, arr2) {
  //if array is same
  if ( eqArrays(arr1, arr2) ){
   // console.log("👍Assertion Passed: [" + actual + "] === [" + expected + "]");
console.log(`Assertion passed: ${arr1} === ${arr2}`)
  } else {
  console.log("🛑Assertion Failed: [" + arr1 + "] !== [" + arr2 + "]");
  }

};

function eqArrays(arr1, arr2){
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

const middle = function(array) {
let midArray = [];

if(array.length > 2){
//for even

if(array.length % 2 === 0){
  midArray.push(array[(array.length / 2 ) - 1])
  midArray.push(array[(array.length / 2)]);
  // for odd

} else {
  midArray.push(array[(Math.floor(array.length / 2))]);
 
}


return midArray;

} else if(array.length <= 2)
return midArray;

  }
/*assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])// => [2, 3]*/
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

module.exports = middle;