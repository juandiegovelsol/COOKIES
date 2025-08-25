function daysAboveFiftyPercent(csv) {
  const valueColumn = "consumption";
  const dateColumn = "date";
  const delimiter = ",";

  const lines = csv.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].split(delimiter).map((h) => h.trim().toLowerCase());
  const vIndex = headers.indexOf(String(valueColumn).toLowerCase());
  const dIndex = headers.indexOf(String(dateColumn).toLowerCase());
  if (vIndex < 0 || dIndex < 0) return [];
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = lines[i].split(delimiter);
    if (cells.length !== headers.length) continue;
    const date = cells[dIndex] ?? "";
    const v = parseFloat(String(cells[vIndex] ?? "").replace(/,/g, ""));
    if (date && Number.isFinite(v)) rows.push({ date, value: v });
  }
  if (rows.length < 2) return [];
  const avg = rows.reduce((s, r) => s + r.value, 0) / rows.length;
  const threshold = avg * 1.5;
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
