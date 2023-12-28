function calculator() {
  const operand1 = Number(prompt("Введіть перше число"));
  const operand2 = Number(prompt("Введіть друге число"));
  const action = prompt("Введіть потрібну дію: +, -, *, /");

  let result;

  switch (action) {
    case "+": {
      result = operand1 + operand2;
      break;
    }
    case "-": {
      result = operand1 - operand2;
      break;
    }
    case "*": {
      result = operand1 * operand2;
      break;
    }
    case "/": {
      result = operand1 / operand2;
      break;
    }
    default: {
      console.log("Сталася помилка");
    }
  }

  console.log(result);
}

calculator();

