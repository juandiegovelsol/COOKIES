const energyByMonth = (json) => {
  const data = JSON.parse(json);
  if (!Array.isArray(data)) return;
  return data.reduce((acc, { date, kwh }) => {
    const d = new Date(date);
    const v = Number(kwh);
    if (Number.isNaN(d) || Number.isNaN(v)) return acc;
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
    acc[key] = (acc[key] || 0) + v;
    return acc;
  }, {});
};

// Example usage
const readingsJson =
  '[{"date": "2025-01-03", "kwh": "12.5"}, {"date": "2025-02-05", "kwh": "15.2"}, {"date": "2025-02-28", "kwh": "4"}, {"date": "2025-03-05", "kwh": "10"}]';
console.log(energyByMonth(readingsJson));
