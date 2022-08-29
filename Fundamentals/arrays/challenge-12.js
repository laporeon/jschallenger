// Return the average of an array of numbers

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

// Solution 01
function myFunction(arr) {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

// Solution 02
function myFunction(arr) {
  let sum = 0;
  for (let counter = 0; counter < arr.length; counter++) {
    sum += arr[counter];
  }
  return sum / arr.length;
}

console.log(myFunction([10, 100, 40])); // Expected: 50
console.log(myFunction([10, 100, 1000])); // Expected: 370
console.log(myFunction([-50, 0, 50, 200])); // Expected: 50
