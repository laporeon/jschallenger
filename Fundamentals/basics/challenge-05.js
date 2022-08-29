// Remove first n characters of string

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction(a) {
  return a.slice(3);
}

console.log(myFunction("abcdefg")); // Expected: 'defg'
console.log(myFunction("1234")); // Expected: '4'
console.log(myFunction("fgedcba")); // Expected: 'dcba'
