function classifyGrades(grades, classifications) {
  return grades.map((grade) => {
    for (const [key, [min, max]] of Object.entries(classifications)) {
      if (grade >= min && grade <= max) {
        return { grade, classification: key };
      }
    }
    return { grade, classification: null };
  });
}

const grades1 = [95, 82, 76, 59, 88];
const classifications1 = {
  Excellent: [90, 100],
  Good: [80, 89],
  Average: [70, 79],
  Poor: [0, 69],
};

console.log(classifyGrades(grades1, classifications1));
