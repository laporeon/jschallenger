// Define an array with conditional elements

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

function myFunction(arr, num) {
  num < 6 ? arr.unshift(0) : arr.unshift(num);
  return arr;
}

console.log(myFunction([1, 2, 3], 6)); // Expected: [6,1,2,3]
console.log(myFunction(["a", "b "], 2)); // Expected: [0,'a','b']
console.log(myFunction([null, false], 11)); // Expected: [11,null,false]
