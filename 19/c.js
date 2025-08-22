function countAbove(csv, column, threshold, delimiter = ",") {
  const lines = csv.split(/\r?\n|\r/).filter(Boolean);
  const headers = split(lines[0], delimiter).map((s) => s.trim());
  const idx = Number.isInteger(column)
    ? column
    : headers.indexOf(String(column));
  if (idx < 0) return 0;
  let count = 0;
  for (let i = 1; i < lines.length; i++) {
    const cells = split(lines[i], delimiter);
    const v = parseFloat(cells[idx] ?? "").replace(/,/g, "");
    if (Number.isFinite(v) && v > threshold) count++;
  }
  return count;
}

function split(line, d) {
  const out = [];
  let cur = "",
    q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (q && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else q = !q;
    } else if (c === d && !q) {
      out.push(cur);
      cur = "";
    } else cur += c;
  }
  out.push(cur);
  return out;
}

const csv = `id,product,price
1,Apple,1.99
2,Banana,0.89
3,Mango,2.49
4,"Honeydew, Melon",3.10`;

console.log(countAbove(csv, "price", 2));
console.log(countAbove(csv, 2, 1));
