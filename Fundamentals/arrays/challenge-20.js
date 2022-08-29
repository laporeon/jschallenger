// Group array of strings by first letter

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
  return arr.reduce((acc, cur) => {
    const index = cur[0].toLowerCase();
    return { ...acc, [index]: [...(acc[index] || []), cur] };
  }, {});
}

console.log(myFunction(["Alf", "Alice", "Ben"])); // Expected: { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(myFunction(["Ant", "Bird", "Bear"])); // Expected: { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(myFunction(["Berlin", "Paris", "Prague"])); // Expected: { b: ['Berlin'], p: ['Paris', 'Prague']}
