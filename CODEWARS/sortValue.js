/** @format */

function sortByValueAndIndex(array) {
  return array.sort((a, b) => {
    const array1 = a * (array.indexOf(a) + 1);
    const array2 = b * (array.indexOf(b) + 1);
    return array1 - array2;
  });
}
