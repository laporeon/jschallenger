// Return the next higher prime number

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function myFunction(a) {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return myFunction(++a);
    }
  }

  return a;
}

console.log(myFunction(38)); // Expected: 41
console.log(myFunction(7)); // Expected: 7
console.log(myFunction(115)); // Expected: 127
console.log(myFunction(2000)); // Expected: 2003
