// Sum object values

// Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction(a) {
  return Object.values(a).reduce((acc, cur) => acc + cur, 0);
}

console.log(myFunction({ a: 1, b: 2, c: 3 })); // Expected: 6
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 })); // Expected: 18
console.log(myFunction({ w: 15, x: 22, y: 13 })); // Expected: 50
