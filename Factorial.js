function Factorial(n) {
  let val = 1;

  if (n < 1) {
    return n;
  }

  for (let i = 1; i <= n; i++) {
    val = val * i;
  }

  return val;
}

const result = Factorial(4);

console.log(result);
