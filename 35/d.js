const maxByJSON = (json, key = "value") => {
  const data = JSON.parse(json); // Parse the JSON string

  if (!Array.isArray(data) || data.length === 0) return null; // Check if it's an array and not empty

  return data.reduce((max, current) => {
    // Ensure current[key] is a number
    const currentValue = Number(current[key]);
    return !max || currentValue > max ? currentValue : max; // Return maximum value
  }, null);
};

const json = '[{"id":1,"value":10},{"id":2,"value":35},{"id":3,"value":27}]';
console.log(maxByJSON(json)); // Should output 35
