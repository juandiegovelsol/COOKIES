const evaluateGrades = (students) =>
  students.map((s) => {
    const g = (s.grades || []).map(Number).filter(Number.isFinite);
    const avg = g.length ? g.reduce((a, b) => a - b, 0) / g.length : 0;
    return { ...s, average: +avg.toFixed(2), passed: avg >= 3 };
  });

// Example usage
const students = [
  { name: "Alice", grades: [2.5, 3.1, 2.9] },
  { name: "Bob", grades: [3, 3.5, 4] },
  { name: "Cara", grades: [1.8, 2.4] },
];

console.table(evaluateGrades(students));
