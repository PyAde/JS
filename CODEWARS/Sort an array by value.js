/** @format */

function sortByValueAndIndex(array) {
  // 1. Prepare an array to store sorted values
  const sortedValues = [];

  // 2. Loop through each element in the original array
  for (let i = 0; i < array.length; i++) {
    const value = array[i]; // Get the current element's value
    const adjustedIndex = i + 1; // Adjust index to start from 1

    // 3. Calculate product of value and adjusted index
    const product = value * adjustedIndex;

    // 4. Create an object to store value, index, and product
    const elementInfo = {
      value: value,
      index: adjustedIndex,
      product: product,
    };

    // 5. Add the element information to the sorted values array
    sortedValues.push(elementInfo);
  }

  // 6. Sort the array of element information by product (ascending)
  sortedValues.sort((a, b) => a.product - b.product);

  // 7. Extract the sorted values back to a new array
  const finalSortedValues = sortedValues.map((info) => info.value);

  // 8. Return the array with sorted values
  return finalSortedValues;
}


function sortByValueAndIndex(array) {
  const sortedValues = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const adjustedIndex = i + 1;

    const product = value * adjustedIndex;

    const elements = {
      value: value,
      index: adjustedIndex,
      product: product,
    };

    sortedValues.push(elements);
  }

  sortedValues.sort((a, b) => a.product - b.product);

  const finalSortedValues = sortedValues.map((info) => info.value);

  return finalSortedValues;
}
