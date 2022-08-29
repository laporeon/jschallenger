// Get type of value

// Write a function that takes a value as argument
// Return the type of the value

function myFunction(a) {
  return typeof a;
}

console.log(myFunction(1)); // Expected: 'number'

console.log(myFunction(false)); // Expected: 'boolean'

console.log(myFunction({})); // Expected: 'object'

console.log(myFunction(null)); // Expected: 'object'

console.log(myFunction("string")); // Expected: 'string'

console.log(myFunction(["array"])); // Expected: 'object'
