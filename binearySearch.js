function binerySearch(arr, target) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;

  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binerySearch([5, 6, 7, 8, 9, 10], 10));
