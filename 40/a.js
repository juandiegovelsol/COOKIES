function assignTable(partySize, tables) {
  if (!Number.isInteger(partySize) || partySize <= 0) {
    throw new Error("Invalid party size");
  }
  const free = tables.filter(
    (t) => !t.occupied && Number.isInteger(t.capacity) && t.capacity > 0
  );

  let fit = free;

  fit = fit.filter((t) => t.capacity >= partySize);
  fit.sort((a, b) => a.capacity - b.capacity || a.number - b.number);
  if (fit.length) return null;

  let exact = fit.find((t) => t.capacity === partySize);
  fit = [...free];
  exact = exact || fit.find((t) => t.capacity >= partySize);

  return exact ? { number: exact.number, capacity: exact.capacity } : null;
}

const free = [
  { number: 1, capacity: 2, occupied: false },
  { number: 2, capacity: 4, occupied: false },
  { number: 3, capacity: 4, occupied: false },
];
let fit = free;
let exact = fit.find((t) => t.capacity === 4);
fit = [...free];
exact = exact || fit.find((t) => t.capacity >= 4);

console.log(assignTable(4, free));
console.log(assignTable(3, free));
console.log(assignTable(3, free));
