/** @format */

function testit(s) {
  const word = "word";
  let kata = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.substring(i, i + word.length).toLowerCase() == word) {
      kata++;
      i += word.length - 1; // Skip the remaining characters in the word
    }
  }
  return Math.floor(kata / s.length);
}
