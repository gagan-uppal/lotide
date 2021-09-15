let assertEqual = function(actual, expected) {
  if ( actual === expected ){
   // console.log("👍Assertion Passed: [" + actual + "] === [" + expected + "]");
console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
  console.log("🛑Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }

};

const findKeyByValue = function(obj, value){
  var result = [];

  Object.keys(obj).forEach(key => {
  
    if(obj[key] === value){
     // console.log(" If -> " + typeof(obj[key]))
      result.push(key);
    }
    /*else{
      console.log(" else -> " + typeof(obj[key]))
    }*/
  })

  return result;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire")[0], "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);