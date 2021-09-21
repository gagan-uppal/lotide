

  // FUNCTION IMPLEMENTATION
let assertObjectsEqual = function(actual, expected) {
  // Implement me!

  
    const inspect = require('util').inspect; // <= add this line
  
    if (eqObjects(actual, expected)) {
      console.log(` Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
    } else {
      console.log(` Assertion Failed: ${inspect(actual)}  !==  ${inspect(expected)}`);
    }
  
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


    assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // Pass
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" }); // Fail
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2", c: "1" }); // Fail
   