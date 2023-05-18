function filterItem(arr, target) {
  return arr.filter((item) => item !== target);
}

console.log(filterItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
