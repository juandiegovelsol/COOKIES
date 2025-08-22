function averageByKey(obj) {
  if (obj === null || typeof obj !== "object")
    throw new TypeError("Input must be a plain object");

  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        throw new TypeError(`Property "${key}" cannot be an empty array`);
      }
      let sum = 0;
      for (const n of value) {
        if (typeof n !== "number" || !Number.isFinite(n)) {
          throw new TypeError(`All items in "${key}" must be finite numbers`);
        }
        sum += n;
      }
      result[key] = sum / value.length;
    } else if (typeof value === "number" && Number.isFinite(value)) {
      result[key] = value;
    } else {
      throw new TypeError(
        `Property "${key}" must be a number or an array of numbers`
      );
    }
  }

  return result;
}

const data = { apples: [2, 4, 6], oranges: 9, grapes: [10, 20, 30, 40] };
console.log(averageByKey(data));
