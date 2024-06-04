/** @format */

function rotateMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const rotatedMatrix = Array.from({ length: m }, () => new Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      rotatedMatrix[m - 1 - j][i] = matrix[i][j];
    }
  }

  return rotatedMatrix;
}
const matrix = [[-1, 4, 5], [2, 3, 4]];
const result = rotateMatrix(matrix);
console.log(result); // Expected output: [[ 5, 4 ], [ 4, 3 ], [ -1, 2 ]]
