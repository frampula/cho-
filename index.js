"use strict";

const arrowSum = (...restArray) => {
  let sum = restArray.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue
  })
  return sum
}

console.log(arrowSum(15,15))

// "use strict";

// const arrowSum = (...restArray) => {
//   return restArray.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
// };

// console.log(arrowSum(15, 15));
