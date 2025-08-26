// test.js
const recordPurchase = require("./d.js");

const history = [];
const updatedHistory = recordPurchase("Alice", 25.5, history);

console.log("Test passed:", updatedHistory.length === 1);
console.log("Person correct:", updatedHistory[0].person === "Alice");
console.log("Amount correct:", updatedHistory[0].amount === 25.5);
console.log("Updated history:", updatedHistory);
