function sumOfTwo(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
}

const result = sumOfTwo([3, 2, 6], 5);

console.log(result);
