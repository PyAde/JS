/** @format */

function alienLanguage(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      let word = "";

      while (i < str.length && str[i] !== " ") {
        word += str[i];
        i++;
      }

      result +=
        word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase() + " ";
      i--; // untuk mengulang perulangan for
    } else {
      result += "";
    }
  }

  return result.trim();
}
