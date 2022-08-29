// Count number of negative values in array

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

// Solution 01
function myFunction(a) {
  let negatives = 0;
  for (let counter = 0; counter < a.length; counter++) {
    if (a[counter] < 0) negatives++;
  }
  return negatives;
}

// Solution 02
function myFunction(a) {
  return a.filter((number) => number < 0).length;
}

console.log(myFunction([1, -2, 2, -4])); // Expected: 2
console.log(myFunction([0, 9, 1])); // Expected: 0
console.log(myFunction([4, -3, 2, 1, 0])); // Expected: 1
