function classifyGrades(grades, classifications) {
  return grades.map((grade) => {
    const [min, max] = classifications[grade];
    if (grade >= min && grade <= max) {
      return {
        grade,
        classification: classifications.findKey(
          (cls) => cls[0] === min && cls[1] === max
        ),
      };
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
console.log(classifications.Excellent);
console.log(classifyGrades(grades, classifications));
