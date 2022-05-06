// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let output = `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
    console.log(output);
  
  } else {
    let output = '🛑🛑🛑 Assertion Failed:' + actual + '!==' + expected;
    console.log(output);
  }
  
};
 
const tail = function(array) {
  let result = array.slice(1);
  return result;
};

//test
const testArray = ["Hello", "Lighthouse", "Labs"];
const result = tail(testArray);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(testArray, ["Hello", "Lighthouse", "Labs"]);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

