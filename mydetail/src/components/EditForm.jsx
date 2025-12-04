import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditForm({ details, setDetails }) {
  const [form, setForm] = useState({ ...details });
  const navigate = useNavigate();

  // Handle normal input changes
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle dynamic tech change
  function handleTechChange(index, value) {
    const newTech = [...form.tech];
    newTech[index] = value;
    setForm({ ...form, tech: newTech });
  }

  // Add a new tech field
  function addTech() {
    setForm({ ...form, tech: [...form.tech, ""] });
  }

  // Remove a tech field
  function removeTech(index) {
    const newTech = form.tech.filter((_, i) => i !== index);
    setForm({ ...form, tech: newTech });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDetails(form);
    navigate("/");
  }

  return (
    <div className="page">
      <h2>Edit Details</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Degree:</label>
        <input name="degree" value={form.degree} onChange={handleChange} required />

        <label>Age:</label>
        <input name="age" value={form.age} onChange={handleChange} required />

        <label>Tech:</label>
        {form.tech.map((t, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            <input
              value={t}
              onChange={(e) => handleTechChange(index, e.target.value)}
              required
            />
            <button type="button" onClick={() => removeTech(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addTech}>
          Add Tech
        </button>

        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
