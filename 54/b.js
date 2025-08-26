function recordPurchase(personName, amount, expenseHistory = [{}]) {
  if (!personName || typeof personName !== "string") {
    throw new Error("Person name must be a valid string");
  }

  if (!amount || typeof amount !== "number" || amount <= 0) {
    throw new Error("Amount must be a positive number");
  }

  if (!Array.isArray(expenseHistory)) {
    throw new Error("Expense history must be an array");
  }

  const validHistory = expenseHistory.filter(
    (record) => Object.keys(record).length > 0 // Fix: Check length of keys
  );

  const newExpense = {
    id: validHistory.length + 1,
    person: personName.trim(),
    amount: Number.parseFloat(amount.toFixed(2)),
    date: new Date().toISOString(),
    timestamp: Date.now(),
  };

  const updatedHistory = [...validHistory, newExpense];

  return updatedHistory;
}

module.exports = recordPurchase;
