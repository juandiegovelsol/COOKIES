function classifyGrades(grades, classifications) {
  return grades.map((grade) => {
    for (const key in classifications) {
      const [min, max] = classifications[key];
      if (grade >= min && grade <= max) {
        return { grade, classification: key };
      }
    }
    return { grade, classification: null };
  });
}

const grades = [95, 82, 76, 59, 88];
const classifications = {
  Excellent: [90, 100],
  Good: [80, 89],
  Average: [70, 79],
  Poor: [0, 69],
};

console.log(classifyGrades(grades, classifications));
