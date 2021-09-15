function eqArrays(arr1, arr2){
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  
  let result = false;
  
  if (arr1Length === arr2Length){
    result=true;
    for(let i=0; i<arr1Length; i++){
      if(arr1[i]===arr2[i]){
        result=true;
        continue;
      }else{
        result=false;
      }
    }
  }
  
  return result;
  
  };

  let assertArraysEqual = function(arr1, arr2) {
    //if array is same
    if ( eqArrays(arr1, arr2) ){
     // console.log("👍Assertion Passed: [" + actual + "] === [" + expected + "]");
  console.log(`Assertion passed: ${arr1} === ${arr2}`)
    } else {
    console.log("🛑Assertion Failed: [" + arr1 + "] !== [" + arr2 + "]");
    }
  
  };
  


const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here
for(let i = 0; i < sentence.length; i++){
  if(sentence[i] !== " ") {
    if(results[sentence[i]]){
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i]
    }
    //console.log(sentence.indexOf(sentence(i)));

  }
}
return results;
};
console.log("letterpositions:" , letterPositions("hello lighthouse"));
assertArraysEqual(letterPositions("hello").e, [1]);

