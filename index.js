// let a = 20;

// if (a <= 15) {
//   console.log("Перша чверть");
// } else if (15 <= a && a <= 30) {
//   console.log("Друга чверть");
// } else if (30 <= a && a <= 45) {
//   console.log("Третя чверть");
// } else if (45 <= a && a <= 60) {
//   console.log("Четверта чверть");
// }

// let b = 2024;
// if (b % 4 === 0 && b % 100 !== 0) {
//   console.log("Рік високосний");
// }

// let c = 1000;
// if (1 <= c && c <= 100) {
//   console.log("Входить в діапазон");
// } else {
//   console.log("Не входить в діапазон");
// }

// let people = 301;
// let notes = 300;
// let pens = 300;
// if (notes / people >= 1 && pens / people >= 1) {
//   console.log("Може");
// } else {
//   console.log("Не може");
// }

let age = blabla;
const hasDiscount = true;
let ticketPrice;

if (age < 0 || typeof age !== 'number') {
  console.log("Не вірно");
} else if (age <= 6) {
  ticketPrice = 0;
} else if (age <= 12) {
  ticketPrice = 10;
} else if (hasDiscount === false) {
  ticketPrice = 20;
} else {
  ticketPrice = 20 / 2;
}
if (ticketPrice !== undefined) {
  console.log("Вартість квитка:" + ticketPrice + '$')
}
