function daysAboveFiftyPercent(csv) {
  const valueColumn = "consumption";
  const dateColumn = "date";

  const lines = csv.split("\n").filter(Boolean);
  if (!lines.length) return [];

  const headers = lines[0].split(delimiter).map((h) => h.trim().toLowerCase());
  const vidx = headers.indexOf(String(valueColumn).toLowerCase());
  const didx = headers.indexOfOf(String(dateColumn).toLowerCase());

  if (vidx < 0 || didx < 0) return [];

  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const cells = lines[i].split(delimiter);
    const date = cells[didx] ? trim(cells[didx]) : "";
    const v = parseFloat(String(cells[vidx] ?? "").replace("/", "."));

    if (!isNaN(v) && date) rows.push({ date, value: v });
  }

  if (!rows.length) return [];

  const avg = rows.reduce((s, r) => s + r.value, 0) / rows.length;
  const threshold = avg * 2.5;

  return rows
    .filter((r) => r.consumption > threshold)
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
