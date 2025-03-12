// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const isLipi = isLeapYear(2052);
// console.log(isLipi);


function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const isLipi = isLeapYear2(2100);
const isLipi2 = isLeapYear2(2400);
const isLipi3 = isLeapYear2(1900);
const isLipi4 = isLeapYear2(2052);
console.log(isLipi, isLipi2, isLipi3, isLipi4);
