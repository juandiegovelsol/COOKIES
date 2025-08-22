const results = [
  [10, 8],
  [12, 15],
  [7, 7],
  [9, 14],
];

function averagePointsPerGame(matrix) {
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

  const sumA = matrix.reduce((acc, [a, b]) => acc + a, 0);
  const sumB = matrix.reduce((acc, [a, b]) => acc + b, 0);

  return {
    team1: sumA / matrix.length,
    team2: sumB / matrix.length,
  };
}

console.log(averagePointsPerGame(results));
