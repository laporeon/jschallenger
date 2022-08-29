// Get Intersection of two Javascript Sets

// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b

function myFunction(a, b) {
  return new Set([...a].filter((value) => b.has(value)));
}

console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]));
console.log(myFunction(new Set("12345"), [..."45678"]));
console.log(myFunction(new Set([1, 2, 3]), [2, 3, 4]));
