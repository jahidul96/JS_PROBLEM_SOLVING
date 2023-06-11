function bubbleSort(arr) {
  let finish;

  do {
    finish = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        finish = true;
      }
    }
  } while (finish);

  return arr;
}

console.log(bubbleSort([2, 1, -5, 5, 7, 3, 10]));
