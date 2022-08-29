// Clear up the chaos behind these strings

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
  return `${a.charAt(0).toUpperCase()}${a
    .slice(1)
    .concat(b.split("").reverse().join(""))
    .replaceAll("%", "")}`;
}

console.log(myFunction("java", "tpi%rcs")); // Expected: 'Javascript'
console.log(myFunction("c%ountry", "edis")); // Expected: ' Countryside
console.log(myFunction("down", "nw%ot")); // Expected: 'Downtown'
