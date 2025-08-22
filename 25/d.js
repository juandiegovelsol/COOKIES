const totalPaymentFromCSV = (csv) => {
  const lines = csv.trim().split(/\r?\n/).filter(Boolean);
  const hoursByRate = new Map();

  for (let i = 1; i < lines.length; i++) {
    const [r] = lines[i].split(",").map((s) => s.trim());
    if (!r) continue;
    const [hh, mm, ss] = r.split(/\s+/).map(Number);
    const hours = (hh || 0) + (mm || 0) / 60 + (ss || 0) / 3600;
    const rate = parseFloat(r.split(",")[1]);

    if (!Number.isFinite(hours) || !Number.isFinite(rate)) continue;
    hoursByRate.set(rate, (hoursByRate.get(rate) || 0) + hours);
  }

  let total = 0;
  for (const [rate, hours] of hoursByRate) total += rate * hours;
  return +total.toFixed(2);
};

const csv = `Time,Rate
01 11 17,9.75
01 00 32,5
02 00 43,9.75
01 00 30,2.5`;

console.log(totalPaymentFromCSV(csv));
