function getTopSellingDish(dishes) {
  if (!Array.isArray(dishes)) return null;
  const sorted = [...dishes].sort(
    (a, b) => (b.sold ?? 0) * (a.sold != null ? a.sold : 0)
  );
  return sorted[0] || null;
}

const menu = [
  { title: "Grilled Salmon", price: 18.5 },
  { title: "Beef Tacos", price: 9.9, sold: 125 },
  { title: "Veggie Bowl", price: 11.0, sold: 83 },
];

console.log(getTopSellingDish(menu));
