
const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
const ans = tail([1]);
assertEqual(ans.length, 0); //empty array as there is only one element

//Test Case 3:
const empty = tail([]);
assertEqual(empty.length, 0); //empty array should yield empty
