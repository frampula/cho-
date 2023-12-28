function calculator(num1, num2, functionLink) {
  let result = functionLink(num1, num2);
  return result;
}

console.log(calculator (5, 5, divide));

console.log(calculator(3, 2, function(a,b){
  return a**b
}))

function multy(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

