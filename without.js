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
  }

  const without = function(sourceArr,itemsToRemove) {
    const resultArray = [];
    for (let elem of sourceArr) {
 
      if (!(itemsToRemove.includes(elem))) {
        resultArray.push(elem);
      }
    }
    return resultArray;
  }

  const words = ["hello", "world", "lighthouse"];
  const result = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(result, ['hello','world']);

