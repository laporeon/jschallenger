// Check if all array elements are equal

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// Solução 01
function myFunction(arr) {
  return arr.every((a) => a === arr[0]);
}

console.log(myFunction([true, true, true, true])); // Expected: true
console.log(myFunction(["test", "test", "test", "test"])); // Expected: true
console.log(myFunction([1, 1, 1, 2])); // Expected: false
console.log(myFunction(["10", 10, 10, 10])); // Expected: false
