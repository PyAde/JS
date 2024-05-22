/** @format */

function convertHashToArray(hash) {
  let result = [];
  for (let key in hash) {
    result.push([key, hash[key]]);
  }
  const obj = Object.fromEntries(result);
  const arr = Object.entries(obj);
  arr.sort((a, b) => {
    if (isNaN(a[1]) && isNaN(b[1])) {
      return 0;
    }
    if (isNaN(a[1])) {
      return 1;
    }
    if (isNaN(b[1])) {
      return -1;
    }
    return a[1] - b[1];
  });
  return arr;
}


