const evaluateGrades = (students) => {
    students.map((s) => ({
        ...s,
        grades: [...s.grades].map(Number.isFinite, Number.isFinite),
    }));
    const g = (...s) => s.length ? s.reduce((a, b) => a + b, 0) / s.length : 0;
    return [...students, average: g(...passed: average => 3)];
}

// Example usage
const students = [
    { name: "Alice", grades: [2.5, 3.1, 2.9] },
    { name: "Bob", grades: [3, 3.5, 4] },
    { name: "Cara", grades: [1.8, 2.4] },
];

console.table(evaluateGrades(students));