import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    { name: "John Doe", age: 28, salary: 50000, department: "Engineering" },
    { name: "Jane Smith", age: 34, salary: 75000, department: "Marketing" },
    { name: "Mike Johnson", age: 42, salary: 85000, department: "Sales" },
  ]);

  const [sortKey, setSortKey] = useState("");
  const [desc, setDesc] = useState(true);

  const sort = (key) => {
    const isDesc = sortKey === key ? !desc : true;
    const sorted = [...data].sort((a, b) => {
      if (typeof a[key] === "string") {
        return isDesc
          ? b[key].localeCompare(a[key])
          : a[key].localeCompare(b[key]);
      }
      return isDesc ? b[key] - a[key] : a[key] - b[key];
    });
    setData(sorted);
    setSortKey(key);
    setDesc(isDesc);
  };

  return (
    <div className="p-6">
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="border p-2 text-left">
                <button
                  onClick={() => sort(key)}
                  className="font-bold hover:text-blue-600"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortKey === key && (desc ? " ↓" : " ↑")}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-gray-50" : ""}>
              {Object.values(row).map((val, j) => (
                <td key={j} className="border p-2">
                  {typeof val === "number" ? val.toLocaleString() : val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
