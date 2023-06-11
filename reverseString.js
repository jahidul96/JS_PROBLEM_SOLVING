function reverseString(word) {
  if (word.length <= 0) {
    return word;
  }

  //   let res = "";

  //   for (let i = word.length - 1; i >= 0; i--) {
  //     res = res + word.charAt(i);
  //   }

  //   return res;

  return reverseString(word.substring(1)) + word.charAt(0);
}

console.log(reverseString("mon"));
