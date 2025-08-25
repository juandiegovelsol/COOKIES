function daysAboveFiftyPercent(
  csv,
  valueColumn = "consumption",
  dateColumn = "date",
  delimiter = ","
) {
  const lines = csv.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = lines[0].split(delimiter).map((h) => h.trim().toLowerCase());
  const vIdx = headers.indexOf(String(valueColumn).toLowerCase());
  const dIdx = headers.indexOf(String(dateColumn).toLowerCase());
  if (vIdx < 0 || dIdx < 0) return [];
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = lines[i].split(delimiter);
    const date = (cells[dIdx] ?? "").trim();
    const v = parseFloat(String(cells[vIdx] ?? "").replace(/,/g, ""));
    if (date && Number.isFinite(v)) rows.push({ date, value: v });
  }
  if (!rows.length) return [];
  const avg = rows.reduce((s, r) => s + r.value, 0) / rows.length;
  const threshold = avg * 1.5; // This change ensures you're checking for values > 150% of the average
  return rows
    .filter((r) => r.value > threshold)
    .map((r) => ({
      date: r.date,
      consumption: r.value,
    }));
}

const csv = `date,consumption
2025-08-02,0.9
2025-08-03,1.0
2025-08-04,3.0
2025-08-06,1.6
2025-08-07,0.8`;

const result = daysAboveFiftyPercent(csv);
console.log(result);
