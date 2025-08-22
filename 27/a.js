const averagePointsPerGame = (matrix) => {
  if (
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !Array.isArray(matrix[0]) ||
    matrix[0].length !== 2
  ) {
    throw new Error(
      "Expected a numeric matrix with rows representing matches between two teams."
    );
  }

  return matrix.reduce((acc, [a, b]) => [acc[0] + a, acc[1] + b], [0, 0]);
};

const results = [
  [10, 8],
  [12, 15],
  [7, 7],
  [9, 14],
];

console.log(averagePointsPerGame(results)); // Expected output: [ 9.5, 11 ]
