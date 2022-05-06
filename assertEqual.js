// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  let output = `✅✅✅  Assertion Passed: ${actual} === ${expected}`
    console.log(output);
  
  }else {
    let output = '🛑🛑🛑 Assertion Failed:' + actual + '!==' + expected;
    console.log(output);
  }
  
  };
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp")
  assertEqual("Lighthouse Labs", "Lighthouse Labs")
  assertEqual(1, 1)
  assertEqual(1, 2)
    