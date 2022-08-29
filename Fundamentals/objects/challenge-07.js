// Creating Javascript objects two

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

function myFunction(a, b) {
  return { [a]: b };
}

console.log(myFunction("a", "b")); // Expected: {a: "b"}
console.log(myFunction("z", "x")); // Expected: {z: "x"}
console.log(myFunction("b", "w")); // Expected: {b: "w"}
