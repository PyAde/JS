/** @format */

function firstToLast(str, c) {
  if (!str.includes(c)) {
    return -1;
  }

  return str.lastIndexOf(c) - str.indexOf(c);
}
