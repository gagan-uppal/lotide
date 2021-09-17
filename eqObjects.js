
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("👍Assertion Passed: [" + actual + "] === [" + expected + "]");
    //console.log(`Assertion passed: ${actual} === ${expected}`)
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


const eqObjects = function(object1, object2) {
result = false;
const keys1 = Object.keys(object1);
console.log("keys1: ", keys1);

const keys2 = Object.keys(object2);
console.log("keys2: ", keys2);
//checking if lengths of two objects are same or not
if(keys1.length !== keys2.length){  

  return false;
}
for (let key of Object.keys(object1)) {
  // checking if both [keys] are arrays
  if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    // using eqArrays to check if they return true
    if (eqArrays(object1[key],object2[key]) === true) {
      result = true
    }
    
    else  {
      return false
    }
    } else if (object1[key] === object2[key]) {
    result = true
  }
  else {
    return false
  }
}
return result;


};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false