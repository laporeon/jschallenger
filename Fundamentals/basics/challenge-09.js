// Remove last n characters of string

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

function myFunction(a) {
  return a.slice(0, -3);
}

console.log(myFunction("abcdefg")); // Expected: 'abcd'
console.log(myFunction("1234")); // Expected: '1'
console.log(myFunction("fgedcba")); // Expected: 'fged'
