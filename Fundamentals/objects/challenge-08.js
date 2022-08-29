// Creating Javascript objects three

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction(a, b) {
  return a.reduce(
    (acc, cur, index) => ({
      ...acc,
      [cur]: b[index],
    }),
    {}
  );
}

console.log(myFunction(["a", "b", "c"], [1, 2, 3])); // Expected: {a:1,b:2,c:3}
console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2])); // Expected: {w:10,x:9,y:5,z:2}
console.log(myFunction([1, "b"], ["a", 2])); // Expected: {1:'a',b:2}
