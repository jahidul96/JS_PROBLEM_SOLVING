function binerySearch(arr, target) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;

  while (firstIndex <= lastIndex) {
    console.log("finding....");
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    if (target == arr[middleIndex]) {
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

// recursive bineary search

function recusiveBinearySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, firstIndex, lastIndex) {
  if (firstIndex > lastIndex) {
    return -1;
  }
  let middileIndex = Math.floor((firstIndex + lastIndex) / 2);

  if (target == arr[middileIndex]) {
    return middileIndex;
  }

  if (target < arr[middileIndex]) {
    return search(arr, target, firstIndex, middileIndex - 1);
  } else {
    return search(arr, target, middileIndex + 1, lastIndex);
  }
}

console.log(recusiveBinearySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
