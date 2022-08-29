// Replace empty strings in object with null values

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value.trim() === "" ? null : value,
    }),
    {}
  );
}

console.log(myFunction({ a: "a", b: "b", c: "" })); // Expected: { a: 'a', b: 'b', c: null }
console.log(myFunction({ a: "", b: "b", c: " ", d: "d" })); // Expected: { a: null, b: 'b', c: null, d: 'd' }
console.log(myFunction({ a: "a", b: "b ", c: " ", d: " " })); // Expected: { a: 'a', b: 'b ', c: null, d: null }
