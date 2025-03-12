const heights = [65, 66, 68, 72, 78, 60, 65, 66];

// function getMax(numbers) {
//   let tallest = numbers[0];
//   for (let i of numbers) {
//     if (tallest < i) {
//       tallest = i;
//     }
//   }
//   return tallest;
// }
// const max = getMax(heights);
// console.log(max);

// function getMin(numbers) {
//   let tallest = numbers[0];
//   for (let i of numbers) {
//     if (tallest > i) {
//       tallest = i;
//     }
//   }
//   return tallest;
// }
// const min = getMin(heights);
// console.log(min);

// const prices = [20000, 16000, 50000, 1100000, 12000, 30000, 35000];
// function getMin(number) {
//   let big = number[0];
//   for (let i of number) {
//     if (i > big) {
//       big = i;
//     }
//   }
//   return big;
// }
// const cheap = getMin(prices);
// console.log(cheap);

// const phones = [
//   { name: "samsung", price: 20000, camera: "12mp", color: "black" },
//   { name: "xiaomi", price: 18000, camera: "12mp", color: "black" },
//   { name: "oppo", price: 30000, camera: "12mp", color: "black" },
//   { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
//   { name: "Walton", price: 31000, camera: "12mp", color: "black" },
//   { name: "HTC", price: 27000, camera: "12mp", color: "black" },
// ];

// function getCheapestPhone(phones) {
//   let min = phones[0];
//   for (let phone of phones) {
//     if (phone.price < min.price) {
//       min = phone;
//     }
//   }
//   return min;
// }
// const cheap = getCheapestPhone(phones);
// console.log(cheap);

// const products = [
//   { name: "shampo", price: 300 },
//   { name: "chiruni", price: 100 },
//   { name: "shirt", price: 700 },
//   { name: "pant", price: 1200 },
// ];
// function sum(number) {
//   let sum = 0;
//   for (let i of number) {
//     sum += i.price;
//   }
//   return sum;
// }
// console.log(sum(products));

// const products = [
//   { name: "shampo", price: 300, quantity: 2 },
//   { name: "chiruni", price: 100, quantity: 3 },
//   { name: "shirt", price: 700, quantity: 5 },
//   { name: "pant", price: 1200, quantity: 1 },
// ];

// function cartTotal(products) {
//   let total = 0;
//   for (const product of products) {
//     const thisProductCost = product.price * product.quantity;
//     total = total + thisProductCost;
//   }
//   return total;
// }

// const shoppingCost = cartTotal(products);
// console.log(shoppingCost);
