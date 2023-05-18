function chunkArray(arr, size) {
  let index = 0;
  let res = [];

  while (index < arr.length) {
    res.push(arr.slice(index, index + size));

    index += size;
  }

  return res;
}

const arr = JSON.parse("[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
const size = 3;
const chunkedArr = chunkArray(arr, size);
console.log(chunkedArr);
