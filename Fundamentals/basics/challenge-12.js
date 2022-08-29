// Check whether a string contains another string and concatenate

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// Solution 01
function myFunction(a, b) {
  let newString = "";
  if (!a.includes(b)) {
    return (newString = `${a}${b}`);
  }
  return (newString = `${b}${a}`);
}

// Solution 02
function myFunction(a, b) {
  return a.includes(b) ? `${b}${a}` : `${a}${b}`;
}

console.log(myFunction("cheese", "cake")); // Expected: 'cheesecake'
console.log(myFunction("lips", "s")); // Expected: 'slips'
console.log(myFunction("Java", "script")); // Expected: 'Javascript'
console.log(myFunction(" think, therefore I am", "I")); // Expected: 'I think, therefore I am'
