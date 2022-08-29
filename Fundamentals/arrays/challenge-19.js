// Create a range of numbers

// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

function myFunction(min, max) {
  let arr = [];
  for (let counter = min; counter <= max; counter++) {
    arr.push(counter);
  }
  return arr;
}

console.log(myFunction(2, 10)); // Expected: [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myFunction(1, 3)); // Expected: [1, 2, 3]
console.log(myFunction(-5, 5)); // Expected: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
console.log(myFunction(2, 7)); // Expected: [2, 3, 4, 5, 6, 7]
