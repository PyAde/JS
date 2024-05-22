/** @format */

function findOdd(A) {
  let count = {};

  for (let i of A) {
    if (count[i]) {
      count[i]++;
    } else {
      count[i] = 1;
    }
  }

  for (let i in count) {
    if (count[i] % 2 === 1) {
      return parseInt(i);
    }
  }

  return 0;
}
