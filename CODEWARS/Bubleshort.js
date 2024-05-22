/** @format */

function bubblesortOnce(a) {
  // TODO
  let b = [].concat(a);

  for (let i = 0; i < b.length; i++) {
    if (b[i] > b[i + 1]) {
        const swap = b[i + 1];
        b[i] = b[i+1]
        b[i+1] = swap;
    }
  }
  return b;
}
