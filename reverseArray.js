function reverseArray(numbers) {
  let firstIndex = 0;
  let lastIndex = numbers.length - 1;

  while (firstIndex < lastIndex) {
    let val = numbers[firstIndex]; //[1, 2,3,4,5]
    numbers[firstIndex] = numbers[lastIndex];

    //[1, 2,3,4,5] = [5,4,3,2,1]
    numbers[lastIndex] = val;

    firstIndex++;
    lastIndex--;
  }

  return numbers;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

// recursive array reverse
function reverseArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  //   console.log(reverseArray(arr.slice(1)));

  let reversedSubArray = reverseArray(arr.slice(1)); // [2, 3, 4, 5, 1]

  reversedSubArray.push(arr[0]); // [5,4,3,2,1]

  return reversedSubArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
