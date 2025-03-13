//Task-1------------------------------------------
// function lowest(number) {
//   let lowestNumber = number[0];
//   for (let i of number) {
//     if (lowestNumber > i) {
//       lowestNumber = i;
//     }
//   }
//   return lowestNumber;
// }
// const heights2 = [167, 190, 120, 165, 137];
// console.log(lowest(heights2));

// Task-2------------------------------------------------
// function small(name) {
//   let smallestName = name[0];
//   for (let i of name) {
//     if (smallestName.length > i.length) {
//       smallestName = i;
//     }
//   }
//   return smallestName;
// }
// const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
// console.log(small(heights2));

// Task-3------------------------------------------------
// function calculate(laptopCount, tabletCount, mobileCount) {
//   const laptop = 35000;
//   const tablet = 15000;
//   const mobile = 20000;

//   const totalCost =
//     laptopCount * laptop + tabletCount * tablet + mobileCount * mobile;
//   return totalCost;
// }
// console.log(calculate(2, 1, 3));



// Task-4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function average(phone) {
//   let sum = 0;
//   let priceArray = [];
//   for (let i of phone) {
//     let price = i.price;
//     priceArray.push(price);
//   }
//   for (let n of priceArray) {
//     sum += n;
//   }
//   const size = priceArray.length;
//   let result = sum / size;
//   return result;
// }
// const phones = [
//   { model: "PhoneA", brand: "Iphone", price: 95000 },
//   { model: "PhoneB", brand: "Samsung", price: 40000 },
//   { model: "PhoneC", brand: "Oppo", price: 26000 },
//   { model: "PhoneD", brand: "Nokia", price: 35000 },
//   { model: "PhoneE", brand: "Iphone", price: 105000 },
//   { model: "PhoneF", brand: "HTC", price: 48000 },
// ];
// console.log(average(phones));


