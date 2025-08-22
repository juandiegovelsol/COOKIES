const maxByJSON = (json, key = "value") => {
  const data = JSON.parse(json);
  if (Array.isArray(data)) {
    if (!data.length) return null;
    return data.reduce((m, x) => {
      const mv = typeof m === "object" ? Number(m[key]) : m;
      const xv = typeof x === "object" ? Number(x[key]) : x;
      return xv > mv ? x : m;
    });
  }

  if (data && typeof data === "object") {
    const [k, v] = Object.entries(data).reduce(
      (m, [kk, vv]) => (Number(vv) > Number(m[1]) ? [kk, vv] : m),
      [null, -Infinity]
    );
    return k === null ? null : { [k]: v };
  }

  return null;
};

const json =
  '[{"id":1,"value":"10"},{"id":2,"value":"35"},{"id":3,"value":"27"}]';
console.log(maxByJSON(json));
