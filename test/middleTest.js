const assertArraysEqual = require('../assertArraysEqual');
//const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
const middle   = require('../middle');

/*assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])// => [2, 3]*/


describe("#midddle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })

});
