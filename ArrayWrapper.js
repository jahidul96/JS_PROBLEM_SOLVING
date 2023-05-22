class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }
}

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((prevVal, cVal) => prevVal + cVal);
};

ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums);
};
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2);
console.log(String(obj1));
console.log(String(obj2));
