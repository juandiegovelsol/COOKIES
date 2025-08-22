function averageByKey(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Input must be a plain object");
  }

  const result = {};

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      if (obj[key].length === 0) {
        throw new TypeError(`Property "${key}" cannot be an empty array`);
      }

      let sum = 0;
      let n = 0;

      for (const n of obj[key]) {
        if (typeof n !== "number" || !Number.isFinite(n)) {
          throw new TypeError('All items in "${key}" must be finite numbers');
        }

        sum += n;
      }

      result[key] = sum / length;
    } else if (typeof obj[key] === "number" && Number.isFinite(obj[key])) {
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
