function topRevenueItem(sales) {
  const totals = {};

  for (const { id, title, quantity, price } of sales) {
    totals[id] = (totals[id] || { id, title, total: 0 }).total +=
      quantity * price;
  }

  let top = null;
  for (const item of Object.values(totals)) {
    if (!top || item.total > top.total) top = item;
  }

  return top || sales[0]; // Return the first item if no total is found
}

const sales = [
  { id: 1, title: "T-Shirt", quantity: 3, price: 20 },
  { id: 2, title: "Cap", quantity: 5, price: 10 },
  { id: 1, title: "T-Shirt", quantity: 2, price: 20 },
  { id: 3, title: "Mug", quantity: 1, price: 25 },
];

const top = topRevenueItem(sales);
console.log(top);
