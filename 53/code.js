function calculateFlightTotal(
  baseFare,
  passengers,
  taxRate,
  extraBags,
  bagFee
) {
  if (typeof baseFare !== "number" || baseFare < 0)
    throw new Error("Invalid baseFare");
  if (!Number.isInteger(passengers) || passengers < 1)
    throw new Error("Invalid passengers");
  if (typeof taxRate !== "number" || taxRate < 0 || taxRate > 1)
    throw new Error("Invalid taxRate");
  if (!Number.isInteger(extraBags) || extraBags < 0)
    throw new Error("Invalid extraBags");
  if (typeof bagFee !== "number" || bagFee < 0)
    throw new Error("Invalid bagFee");

  const total = passengers * baseFare * (1 + taxRate) + extraBags * bagFee;
  return Math.round(total * 100) / 100;
}

module.exports = calculateFlightTotal;
