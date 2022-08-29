// Get last n elements of an array

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array

function myFunction(a) {
  return a.splice(-3);
}

console.log(myFunction([1, 2, 3, 4])); // Expected: [2,3,4]
console.log(myFunction([5, 4, 3, 2, 1, 0])); // Expected: [2,1,0]
console.log(myFunction([99, 1, 1])); // Expected: [99,1,1]
