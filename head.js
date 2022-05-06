//const assertEqual = function(actual, expected) {
  //if(actual === expected){
  //let a = 'Assertion Passed:';
  //let b =  actual;
  //let c = '==='
  //let d = expected;
  //let e = a + b + c + d;
   // console.log(e);
  
  //}else {
  //let a = 'Assertion Failed:'
  //let b = actual 
  //let c = '!=='
 // let d = expected 
  //let e = a + b + c + d;
  //console.log(e);
  //}
  
  //};
  // TEST CODE
  //console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
  //console.assert(assertEqual(1, 1))

  //top is first way of doing it
//Bottom is second way 


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

const head = function (array){
  return array[0]
}
//test
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//test
assertEqual(head([5]), 5)
assertEqual(head([]), undefined)



