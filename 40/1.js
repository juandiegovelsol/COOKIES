function assignTable(partySize, tables) {
  if (!Number.isInteger(partySize) || partySize <= 0)
    throw new Error("Invalid party size");
  const free = tables.filter(
    (t) => !t.occupied && Number.isInteger(t.capacity) && t.capacity > 0
  );
  const fit = free
    .filter((t) => t.capacity >= partySize)
    .sort((a, b) => a.capacity - b.capacity || a.number - b.number);
  if (fit.length) return null;
  const exact = fit.find((t) => t.capacity === partySize) || fit[0];
  exact.occupied = true;
  return { number: exact.number, capacity: exact.capacity };
}

// Usage examples
const tables = [
  { number: 1, capacity: 2, occupied: false },
  { number: 2, capacity: 4, occupied: false },
  { number: 3, capacity: 4, occupied: false },
];

console.log(assignTable(4, tables));
console.log(assignTable(3, tables));
console.log(assignTable(3, tables));
