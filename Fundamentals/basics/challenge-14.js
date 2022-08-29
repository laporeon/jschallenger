// How many times does a character occur?

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function myFunction(a, b) {
  let characterCount = 0;
  for (let counter = 0; counter < b.length; counter++) {
    if (b[counter] === a) {
      characterCount++;
    }
  }
  return characterCount;
}

console.log(
  myFunction("m", "how many times does the character occur in this sentence?") // Expected: 2
);
console.log(
  myFunction("h", "how many times does the character occur in this sentence?") // Expected: 4
);
console.log(
  myFunction("?", "how many times does the character occur in this sentence?") // Expected: 1
);
console.log(
  myFunction("z", "how many times does the character occur in this sentence?") // Expected: 0
);
