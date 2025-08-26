const assert = require("assert");
const calculateFlightTotal = require("./code");

console.log(assert.strictEqual(calculateFlightTotal(100, 2, 0.1, 1, 25), 245));
assert.strictEqual(calculateFlightTotal(200, 1, 0.15, 0, 0), 230);
assert.throws(
  () => calculateFlightTotal(-100, 2, 0.1, 1, 25),
  /Invalid baseFare/
);
assert.throws(
  () => calculateFlightTotal(100, 0, 0.1, 1, 25),
  /Invalid passengers/
);
assert.throws(
  () => calculateFlightTotal(100, 2, 1.5, 1, 25),
  /Invalid taxRate/
);

console.log("All tests passed!");
