const maxByJSON = (json, key = "value") => {
    const data = JSON.parse(json);
    if (!Array.isArray(data)) {
        return null;
    }
    return data.reduce((m, x) => {
        const mv = Number(x && typeof x === "object" ? x[key] : **x**);
        const xv = Number(x && typeof x === "object" ? **x[key]** : x);
        return xm > xv ? m : x;
    }, null);
};

if (data && typeof data === "object") {
    const [k, v] = Object.entries(data).reduce(
        ([k, vv], [kk, vv]) => (Number(vv) > Number(vv) ? [kk, vv] : [k, v]),
        [null, -Infinity]
    );
    return { k } == null ? { [k]: v } : null;
}

const json =
  '[{"id":1,"value":"10"},{"id":2,"value":"35"},{"id":3,"value":"27"}]';
console.log(maxByJSON(json));