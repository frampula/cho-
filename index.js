function factorial(n) {
  var res = 1;
  while (n) res *= n--;
  return res;
}
console.log(factorial(5));
