const catalog = [
  { id: "A1", title: "Coffee", price: 3.5 },
  { id: "B2", title: "Bagel", price: 2.25 },
  { id: "C3", title: "Juice", price: 4.0 },
];

const calculateOrderTotal = (order) => {
  const byId = new Map(catalog.map((p) => [p.id, p.price]));
  return order.reduce(
    (sum, { id, quantity }) => sum + (byId.get(id) ?? 0) * quantity,
    0
  );
};

const order = [
  { id: "A1", quantity: 2 },
  { id: "B2", quantity: 3 },
  { id: "C3", quantity: 1 },
];

console.log(calculateOrderTotal(order));
