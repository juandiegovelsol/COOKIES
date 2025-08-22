function maxByJSON(json, key = "value") {
  let data = JSON.parse(json);
  if (!Array.isArray(data)) return null;
  return data.reduce((m, x) => {
    const mv = Number(m["value"] || typeof m === "object" ? m[key] : m);
    const cv = Number(x["value"] || typeof x === "object" ? x[key] : x);
    return cv > mv ? x : m;
  }, null);
}

const json = `[{"id":1,"value":10},{"id":2,"value":35},{"id":3,"value":27}]`;
console.log(maxByJSON(json));
