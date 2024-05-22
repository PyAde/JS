/** @format */

function sumOfN(n) {
  let result = [0];
  for (let i = 1; i <= Math.abs(n); i++) {
    let sum = result[i - 1] + (n < 0 ? -i : i);
    result.push(sum);
  }
  return result;
}
