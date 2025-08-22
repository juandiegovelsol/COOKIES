function topRevenueItem(sales) {
  const totals = {};

  // Calculate total revenue for each item
  for (const { id, title, quantity, price } of sales) {
    if (!totals[id]) {
      totals[id] = { id, title, total: 0 };
    }
    totals[id].total += quantity * price; // Corrected this line
  }

  let top = null;
  // Find the item with the highest total
  for (const item of Object.values(totals)) {
    if (!top || item.total > top.total) {
      top = item; // Ensure it assigns the item with the highest total
    }
  }

  return top;
}

const sales = [
  { id: 1, title: "T-Shirt", quantity: 3, price: 20 },
  { id: 2, title: "Cap", quantity: 5, price: 10 },
  { id: 1, title: "T-Shirt", quantity: 2, price: 20 },
  { id: 3, title: "Mug", quantity: 1, price: 25 },
];

const top = topRevenueItem(sales);
console.log(top);
