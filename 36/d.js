const energyByMonth = (json) => {
  const data = JSON.parse(json);

  // Ensure data is an array
  if (!Array.isArray(data)) return {};

  return data.reduce((acc, { date, kWh }) => {
    const v = Number(kWh);
    const d = new Date(date);

    // Check if date is valid
    if (!Number.isFinite(v) || Number.isNaN(d.getTime())) return acc;

    // Create the key in the format YYYY-MM
    const key = `${d.getFullYear()}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;

    // Accumulate the energy usage
    acc[key] = (acc[key] || 0) + v;
    return acc;
  }, {});
};

// Example usage:
const readingsJson =
  '[{"date":"2025-01-03","kWh":12.5},{"date":"2025-02-02","kWh":15.2},{"date":"2025-02-28","kWh":4},{"date":"2025-03-05","kWh":10}]';
console.log(energyByMonth(readingsJson));
