function mergeSortedList(list1, list2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      result.push(list1[i]);
      i++;
    } else {
      result.push(list2[j]);
      j++;
    }
  }

  while (i < list1[i]) {
    result.push(list1[i]);
    i++;
  }
  while (j < list1[j]) {
    result.push(list1[j]);
    i++;
  }

  return result;
}

let list1 = [1, 2, 4],
  list2 = [1, 3, 4];

console.log(mergeSortedList(list1, list2));
