// Get every nth element of array

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function myFunction(a, n) {
  return a.filter((value, index) => index % n === n - 1);
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // Expected: [3,6,9]
console.log(myFunction([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // Expected: [6,1]
console.log(myFunction([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // Expected: [2,6,4,8,10]
