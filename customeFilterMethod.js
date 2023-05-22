Array.prototype.customeFilter = function (fn) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.customeFilter((number) => number % 2 == 0));
