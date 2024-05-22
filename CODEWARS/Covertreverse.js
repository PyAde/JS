/** @format */

function sortIt(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    counts[element] = counts[element] ? counts[element] + 1 : 1;
  }

  const sortedArr = arr.slice().sort((a, b) => {
    const countA = counts[a];
    const countB = counts[b];
    if (countA === countB) {
      return b - a;
    } else if (countA > countB) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedArr;
}
