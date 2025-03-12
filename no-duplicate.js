const biryanKhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
function noDuplicate(array) {
  let unique = [];
  for (let i of array) {
    if (unique.includes(i) === false) {
        unique.push(i);
    }
}
return unique;
}
const uniqueArray = noDuplicate(biryanKhor);
console.log(uniqueArray);
