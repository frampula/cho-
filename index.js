let firstResult = Number(prompt("Введіть перше число"));
let secondResult = Number(prompt("Введіть друге число"));
let result = firstResult + secondResult;

if (Number.isNaN(result)) {
  console.log("Ти не правий, введи число");
} else {
  console.log(result)
}
