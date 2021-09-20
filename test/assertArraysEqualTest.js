const assertArraysEqual = require('../assertArraysEqual');


  assertArraysEqual([],[]);
  assertArraysEqual([2,3,4],[]);
  assertArraysEqual([2,3,4],[2,3,4]);
  assertArraysEqual([],[2,3,4]);
  