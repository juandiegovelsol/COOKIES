import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", age: "", email: "" });
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => !v))
      return setError("All fields are required");
    setRecords((prevRecords) => [...prevRecords, form]);
    setForm({ name: "", age: "", email: "" });
    setError("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        {["name", "age", "email"].map((f) => (
          <input
            key={f}
            type={f === "age" ? "number" : f === "email" ? "email" : "text"}
            name={f}
            placeholder={f}
            value={form[f]}
            onChange={(e) => setForm({ ...form, [f]: e.target.value })}
          />
        ))}
        <button>Add</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table border="1">
        <thead>
          <tr>
            {["Name", "Age", "Email"].map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              {Object.values(r).map((v, j) => (
                <td key={j}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
