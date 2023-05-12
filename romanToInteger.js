function romanToInt(s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentNumeral = romanNumerals[s[i]];
    const nextNumeral = romanNumerals[s[i + 1]];

    if (nextNumeral && nextNumeral > currentNumeral) {
      result -= currentNumeral;
    } else {
      result += currentNumeral;
    }
  }

  return result;
}

const romanNumeral = "MMXXI";
const result = romanToInt(romanNumeral);
console.log(result);
