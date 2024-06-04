/** @format */

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

const binaryArray = [1,0, 1, 1, 0];
const result = binaryArrayToNumber(binaryArray);

console.log(result); // Output: 6
