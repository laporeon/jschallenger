// Add n days to an existing date

// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

function myFunction(a, b) {
  const mili = b * 24 * 60 * 60 * 1000;
  return a.getTime() + mili;
}

console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 31));
console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 10));
console.log(myFunction(new Date(Date.UTC(2000, 02, 28)), 2));
