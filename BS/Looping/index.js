/** @format */

// let number = [1,5,3,10,3,2,1]

// for(let i = 0; i < number.length ; i++){
//     for(let j = 0; j <number.length - 1 - i; j++){
//         if(number[j] < number[j + 1]){
//             let temp = number[j];
//             number[j] = number[j + 1];
//             number[j+1] = temp;
//         }
//     }
// }

// console.log(number)

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(bigToSmall([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1");
//     assert.strictEqual(bigToSmall([[1,3,5],[2,4,6]]) , "6>5>4>3>2>1");
//     assert.strictEqual(bigToSmall([[1,1],[1],[1,1]]) , "1>1>1>1>1");
//   });
// });

function bigToSmall(arr) {
  //coding here...
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      array.push(arr[i][j]);
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array.join(">");
}

console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

function bubblesortOnce(a) {
  let b = [...a];
  for (let i = 0; i < b.length - 1; i++) {
    if (b[i] > b[i + 1]) {
      let temp = b[i];
      b[i] = b[i + 1];
      b[i + 1] = temp;
    }
  }
  return b;
}
