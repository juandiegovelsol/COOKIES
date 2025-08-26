function recordPurchase(personName, amount, expenseHistory=[]) {
    if (!personName || typeof personName !== "string") {
        throw new Error("Person name must be a valid string");
    }
    if (!amount || typeof amount !== "number" || amount <= 0) {
        throw new Error("Amount must be a positive number");
    }
    if (!Array.isArray(expenseHistory)) {
        throw new Error("Expense history must be an array");
    }

    const newExpense = expenseHistory.length + 1, // Fixed, take current length
    person: personName.trim(),
    amount: Number.parseFloat(amount.toFixed(2)),
    timestamp: Date.now();

    const updatedHistory = [...expenseHistory, newExpense];
    return updatedHistory;
}

module.exports = recordPurchase;
