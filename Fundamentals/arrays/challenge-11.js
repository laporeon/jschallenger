// Calculate the sum of an array of numbers

// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers

// Solution 01
function myFunction(a) {
  return a.reduce((acc, cur) => acc + cur);
}

//Solution 02
function myFunction(a) {
  let sum = 0;
  for (let counter = 0; counter < a.length; counter++) {
    sum += a[counter];
  }
  return sum;
}

console.log(myFunction([10, 100, 40])); // Expected: 150
console.log(myFunction([10, 100, 1000, 1])); // Expected: 1111
console.log(myFunction([-50, 0, 50, 200])); // Expected: 200
