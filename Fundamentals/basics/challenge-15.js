// Check if a number is a whole number

// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a) {
  return Number.isInteger(a);
}

console.log(myFunction(4)); // Expected: true
console.log(myFunction(1.123)); // Expected: false
console.log(myFunction(1048)); // Expected: true
console.log(myFunction(10.48)); // Expected: false
