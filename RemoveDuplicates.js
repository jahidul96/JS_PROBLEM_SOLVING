function removeDuplicates(arr, target) {
  // return arr.filter((val, index, arr) => val !== target);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (target == arr[i]) {
      continue;
    }
    result.push(arr[i]);
  }

  return result;
}

const result = removeDuplicates([1, 2, 6, 3, 4, 5, 6], 6);

console.log(result);
