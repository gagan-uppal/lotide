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





const takeUntil = function(array, callback) {

  for (i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i)
    }

  }
}

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);
  
  console.log('---');
  
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);

  assertArraysEqual([results1], [1, 2, 5, 7, 2]);