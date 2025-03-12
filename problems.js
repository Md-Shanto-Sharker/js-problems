// Task-1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function fahrenheit(F) {
//   const celsius = ((F - 32) * 5) / 9;
//   return celsius;
// }
// console.log(fahrenheit(70));

// Task-2>>>>>>>>>>>>>>>>>>>>>>>>
// function number(a, num) {
//   let count = 0;
//   for (let i of a) {
//     if (i === num) {
//       count++;
//     }
//   }
//   return count;
// }
// const numbers = [5, 6, 11, 12, 98, 5];
// console.log(number(numbers, 5));
// console.log(number(numbers, 25));

// Task-3>>>>>>>>>>>>>>>>>>>>>>
// function vowels(str) {
//   const vowel = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i of str.toLowerCase()) {
//     if (vowel.includes(i)) {
//       count++;
//     }
//   }
//   return count;
// }
// const numbers = "education";
// const numbers2 = "EDUCATION";
// console.log(vowels(numbers2));
// console.log(vowels(numbers));

// Task-4_____________________________________
// function word(str) {
//   let mainStr = str.split(" ");
//   let bigWord = "";
//   for (let i of mainStr) {
//     if (bigWord.length < i.length) {
//       bigWord = i;
//     }
//   }
//   return bigWord;
// }
// const string = "I am learning Programming to become a programmer";
// console.log(word(string));

// Task-5-------------------------
// function random() {
//   return Math.round(Math.random() * 10) + 10;
// }
// console.log(random());
