const totalPaymentFromCSV = (csv) => {
  const lines = csv.trim().split("\r\n").filter(Boolean);
  const hoursByRate = new Map();

  for (let i = 1; i < lines.length; i++) {
    const [t, r] = lines[i].split(",").map((s) => s.trim());
    if (!t || !r) continue;

    const [hh, mm, ss] = t.split("/").map(Number);
    const hours = (hh || 0) + (mm || 0) / 60 + (ss || 0) / 3600;
    const rate = parseFloat(r);
    if (Number.isFinite(hours) && Number.isFinite(rate)) {
      hoursByRate.set(rate, (hoursByRate.get(rate) || 0) + hours);
    }
  }

  let total = 0;
  for (const [rate, hours] of hoursByRate) {
    total += rate * hours;
  }

  return total.toFixed(2);
};

console.log(
  totalPaymentFromCSV(`
Time,Rate
01 11 17,9.75
01 15 00,32.5
02 00 43,9.75
01 15 00,32.5`)
);
