// Creating Javascript objects one

// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object

function myFunction(a) {
  return {
    key: a,
  };
}

console.log(myFunction("a")); // Expected: {key: 'a'}
console.log(myFunction("b")); // Expected: {key: 'z'}
console.log(myFunction("z")); // Expected: {key: 'b'}
