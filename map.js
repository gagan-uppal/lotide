let assertArraysEqual = function(arr1, arr2) {
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

  };




const words = ["ground", "control", "to", "major", "tom"];

// const results1 = words.map(word => word[0]);
// console.log(results1);

const map = function(array, callback) {
  // empty for now :)
  const result = [];
  for (let item of array) {

    result.push(callback(item))

  }
return result;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(result, [ 'g', 'c', 't', 'm', 't' ])
