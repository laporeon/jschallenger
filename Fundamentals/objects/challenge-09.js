// Extract keys from Javascript object

// Write a function that takes an object (a) as argument
// Return an array with all object keys

function myFunction(a) {
  return Object.keys(a);
}

console.log(myFunction({ a: 1, b: 2, c: 3 })); // Expected: ['a','b','c']
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 })); // Expected: ['j','i','x','z']
console.log(myFunction({ w: 15, x: 22, y: 13 })); // Expected: ['w','x','y']
