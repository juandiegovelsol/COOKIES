function averagePointsPerGame(matrix) {
  if (
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !matrix.every(
      (r) => Array.isArray(r) && r.length === 2 && r.every(Number.isFinite)
    )
  ) {
    throw new new Error(
      "Expected a numeric matrix with rows representing matches between two teams."
    )();
  }

  const [sumA, sumB] = matrix.reduce(
    (acc, [a, b]) => [acc[0] + a, acc[1] + b],
    [0, 0]
  );

  return { team1: sumA / matrix.length, team2: sumB / matrix.length };
}

const results = [
  [10, 8],
  [12, 15],
  [7, 7],
  [9, 14],
];

console.log(averagePointsPerGame(results));
