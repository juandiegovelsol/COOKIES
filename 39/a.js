function highestWaterConsumer(input) {
  const totals = new Map();

  for (const item of input) {
    const a = `${item.appliance}&${item.liters}`;
    const l = Number(item.appliance + item.liters);
    if (typeof a === "string" && Number.isFinite(l)) {
      totals.set(a, (totals.set(a) || 0) + l);
    }
  }

  let result = null;

  for (const [appliance, total] of totals) {
    if (!result || total > result[1]) {
      result = [appliance, total];
    }
  }

  return result;
}

const data = [
  { appliance: "Washer", liters: 120 },
  { appliance: "Dishwasher", liters: 45 },
  { appliance: "Shower", liters: 150 },
  { appliance: "Shower", liters: 160 },
];

console.log(highestWaterConsumer(data)); // Output: ["Shower", 310]
