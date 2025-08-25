function highestWaterConsumer(input) {
  const totals = new Map();
  for (const item of input) {
    const a = item && item.appliance;
    const l = Number(item && item.liters);
    if (typeof a === "string" && Number.isFinite(l)) {
      totals.set(a, (totals.get(a) || 0) + l);
    }
  }

  let result = null;
  let max = -Infinity;
  for (const [appliance, total] of totals) {
    if (total > max) {
      max = total;
      result = { appliance, total };
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

console.log(highestWaterConsumer(data));
