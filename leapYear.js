// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const isLipi = isLeapYear(2052);
// console.log(isLipi);

// function isLeapYear2(year) {
//   if (year % 100 !== 0 && year % 4 === 0) {
//     return true;
//   } else if (year % 100 === 0 && year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const isLipi = isLeapYear2(2100);
// const isLipi2 = isLeapYear2(2400);
// const isLipi3 = isLeapYear2(1900);
// const isLipi4 = isLeapYear2(2052);
// console.log(isLipi, isLipi2, isLipi3, isLipi4);

// function oddAverage(number) {
//   let sum = 0;
//   let oddNumbers = [];
//   for (let i of number) {
//     if (i % 2 !== 0) {
//       oddNumbers.push(i);
//       sum += i;
//     }
//   }
//   let size = oddNumbers.length;
//   let avg = sum / size;
//   return avg;
// }
// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log("average of the odd numbers is:", avg);

function evenAverage(number) {
  let even = [];
  let sum = 0;
  for (let i of number) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  for (let n of even) {
    sum += n;
  }
  const count = even.length;
  const avg = sum / count;
  return avg;
}
const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = evenAverage(numbers);
console.log("average of the even numbers is:", avg);
