function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const value = arr[start];
    arr[start] = arr[end];
    arr[end] = value;

    start++;
    end--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

// recursive array reverse
function reverseArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  //   console.log(reverseArray(arr.slice(1)));

  let reversedSubArray = reverseArray(arr.slice(1));

  reversedSubArray.push(arr[0]);

  return reversedSubArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
