/** @format */

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("divisibleByLast", () => {
  it("Sample tests", () => {
    assert.deepEqual(
      divisibleByLast(73312),
      [false, false, true, false, true],
      "divisibleByLast(73312)"
    );
    assert.deepEqual(
      divisibleByLast(2026),
      [false, true, false, true],
      "divisibleByLast(2026)"
    );
    assert.deepEqual(
      divisibleByLast(635),
      [false, false, false],
      "divisibleByLast(635)"
    );
    assert.deepEqual(
      divisibleByLast(1337),
      [false, true, true, false],
      "divisibleByLast(1337)"
    );
  });
});

function divisibleByLast(n) {
  let number = n.toString().split("").map(Number);
  let result = [false];

  for (let i = 1; i < number.length; i++) {
    if (number[i] % number[i - 1] === 0) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}
