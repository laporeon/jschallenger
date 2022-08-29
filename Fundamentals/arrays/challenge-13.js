// Return the longest string from and array os strings

// Write a function that takes an array of strings as argument
// Return the longest string

// Solution 01
function myFunction(arr) {
  let longest = arr[0];
  for (let counter = 0; counter < arr.length; counter++) {
    if (arr[counter].length > longest.length) longest = arr[counter];
  }
  return longest;
}

// Solution 02
function myFunction(arr) {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}

console.log(myFunction(["help", "me"])); // Expected: 'help'
console.log(myFunction(["I", "need", "candy"])); // Expected: 'candy'
