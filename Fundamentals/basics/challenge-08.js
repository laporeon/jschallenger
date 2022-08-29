// Extract first half of string

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

function myFunction(a) {
  return a.slice(0, a.length / 2);
}

console.log(myFunction("abcdefg")); // Expected: 'abcd'
console.log(myFunction("1234")); // Expected: '12'
console.log(myFunction("fgedcba")); // Expected: 'ged'
