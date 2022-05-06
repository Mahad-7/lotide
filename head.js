const assertEqual = function(actual, expected) {
  if(actual === expected){
  let a = 'Assertion Passed:';
  let b =  actual;
  let c = '==='
  let d = expected;
  let e = a + b + c + d;
   // console.log(e);
  
  }else {
  let a = 'Assertion Failed:'
  let b = actual 
  let c = '!=='
  let d = expected 
  let e = a + b + c + d;
  console.log(e);
  }
  
  };
  // TEST CODE
  console.assert(assertEqual("Lighthouse Labs", "Bootcamp"))
  console.assert(assertEqual(1, 1))