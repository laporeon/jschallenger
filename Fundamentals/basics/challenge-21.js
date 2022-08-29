// Find next higher natural number that is divisible by y

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function myFunction(x, y) {
  while (x % y !== 0) {
    x++;
  }
  return x;
}

console.log(myFunction(1, 23)); // Expected: 23
console.log(myFunction(23, 23)); // Expected: 23
console.log(myFunction(7, 3)); // Expected: 9
console.log(myFunction(-5, 7)); // Expected: 0
