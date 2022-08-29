// Return the next nearest quarter hour of a date

// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

function myFunction(date) {
  // console.log(date.getMinutes());
  return date.getMinutes() < 15
    ? 15
    : date.getMinutes() <= 30
    ? 30
    : date.getMinutes() <= 45
    ? 45
    : 0;
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00)));
