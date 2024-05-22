/** @format */

function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((p) => p.split("").join(separator))
    .join(" ");
}
