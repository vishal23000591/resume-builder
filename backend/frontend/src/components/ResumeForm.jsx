// src/components/ResumeForm.jsx
import React from "react";
import api from "../services/api";

export default function ResumeForm({ formData, setFormData }) {
  // ---- Update Basics ----
  const updateBasics = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      basics: { ...(prev.basics || {}), [name]: value },
    }));
  };

  // ---- Add & Update Helpers ----
  const addItem = (key, template) => {
    setFormData((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), template],
    }));
  };

  const updateItem = (key, index, field, value) => {
    setFormData((prev) => {
      const updated = [...(prev[key] || [])];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [key]: updated };
    });
  };

  const updateArray = (key, index, value) => {
    setFormData((prev) => {
      const updated = [...(prev[key] || [])];
      updated[index] = value;
      return { ...prev, [key]: updated };
    });
  };

  // ---- Save to Backend ----
  const saveResume = () => {
    const safeData = {
      basics: { ...(formData.basics || {}) },
      experience: formData.experience || [],
      education: formData.education || [],
      projects: formData.projects || [],
      certifications: formData.certifications || [],
      awards: formData.awards || [],
      skills: formData.skills || [],
      languages: formData.languages || [],
      interests: formData.interests || [],
    };

    api
      .saveResume(safeData)
      .then(() => alert("✅ Resume saved successfully!"))
      .catch(() => alert("❌ Error saving resume"));
  };

  // ---- Download Resume as JSON ----
  const downloadResume = () => {
    const safeData = {
      basics: { ...(formData.basics || {}) },
      experience: formData.experience || [],
      education: formData.education || [],
      projects: formData.projects || [],
      certifications: formData.certifications || [],
      awards: formData.awards || [],
      skills: formData.skills || [],
      languages: formData.languages || [],
      interests: formData.interests || [],
    };

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(safeData, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "resume.json");
    dlAnchor.click();
  };

  return (
    <div className="resume-form">
      {/* ===== Basics ===== */}
      <section className="card">
        <h3>Basic Info</h3>
        {["name", "title", "email", "phone", "location", "linkedin", "github"].map(
          (field) => (
            <input
              key={field}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData.basics?.[field] || ""}
              onChange={updateBasics}
            />
          )
        )}
        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={formData.basics?.summary || ""}
          onChange={updateBasics}
        />
      </section>

      {/* ===== Experience ===== */}
      <section className="card">
        <h3>Experience</h3>
        {(formData.experience || []).map((exp, i) => (
          <div key={i} className="item-block">
            {["role", "company", "start", "end", "desc"].map((field) => (
              <input
                key={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={exp[field] || ""}
                onChange={(e) => updateItem("experience", i, field, e.target.value)}
              />
            ))}
          </div>
        ))}
        <button
          onClick={() =>
            addItem("experience", { role: "", company: "", start: "", end: "", desc: "" })
          }
          className="btn"
        >
          + Add Experience
        </button>
      </section>

      {/* ===== Education ===== */}
      <section className="card">
        <h3>Education</h3>
        {(formData.education || []).map((edu, i) => (
          <div key={i} className="item-block">
            {["school", "degree", "start", "end"].map((field) => (
              <input
                key={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={edu[field] || ""}
                onChange={(e) => updateItem("education", i, field, e.target.value)}
              />
            ))}
          </div>
        ))}
        <button
          onClick={() => addItem("education", { school: "", degree: "", start: "", end: "" })}
          className="btn"
        >
          + Add Education
        </button>
      </section>

      {/* ===== Projects ===== */}
      <section className="card">
        <h3>Projects</h3>
        {(formData.projects || []).map((p, i) => (
          <div key={i} className="item-block">
            {["title", "desc", "tech"].map((field) => (
              <input
                key={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={p[field] || ""}
                onChange={(e) => updateItem("projects", i, field, e.target.value)}
              />
            ))}
          </div>
        ))}
        <button onClick={() => addItem("projects", { title: "", desc: "", tech: "" })} className="btn">
          + Add Project
        </button>
      </section>

      {/* ===== Certifications ===== */}
      <section className="card">
        <h3>Certifications</h3>
        {(formData.certifications || []).map((c, i) => (
          <div key={i} className="item-block">
            {["title", "issuer", "year"].map((field) => (
              <input
                key={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={c[field] || ""}
                onChange={(e) => updateItem("certifications", i, field, e.target.value)}
              />
            ))}
          </div>
        ))}
        <button onClick={() => addItem("certifications", { title: "", issuer: "", year: "" })} className="btn">
          + Add Certification
        </button>
      </section>

      {/* ===== Awards ===== */}
      <section className="card">
        <h3>Awards</h3>
        {(formData.awards || []).map((a, i) => (
          <div key={i} className="item-block">
            {["title", "year"].map((field) => (
              <input
                key={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={a[field] || ""}
                onChange={(e) => updateItem("awards", i, field, e.target.value)}
              />
            ))}
          </div>
        ))}
        <button onClick={() => addItem("awards", { title: "", year: "" })} className="btn">
          + Add Award
        </button>
      </section>

      {/* ===== Skills ===== */}
      <section className="card">
        <h3>Skills</h3>
        {(formData.skills || []).map((skill, i) => (
          <input
            key={i}
            placeholder="Skill"
            value={skill}
            onChange={(e) => updateArray("skills", i, e.target.value)}
          />
        ))}
        <button onClick={() => addItem("skills", "")} className="btn">
          + Add Skill
        </button>
      </section>

      {/* ===== Languages ===== */}
      <section className="card">
        <h3>Languages</h3>
        {(formData.languages || []).map((lang, i) => (
          <input
            key={i}
            placeholder="Language"
            value={lang}
            onChange={(e) => updateArray("languages", i, e.target.value)}
          />
        ))}
        <button onClick={() => addItem("languages", "")} className="btn">
          + Add Language
        </button>
      </section>

      {/* ===== Interests ===== */}
      <section className="card">
        <h3>Interests</h3>
        {(formData.interests || []).map((int, i) => (
          <input
            key={i}
            placeholder="Interest"
            value={int}
            onChange={(e) => updateArray("interests", i, e.target.value)}
          />
        ))}
        <button onClick={() => addItem("interests", "")} className="btn">
          + Add Interest
        </button>
      </section>

      {/* ===== Save & Download Buttons ===== */}
      <section className="card actions">
        <button onClick={saveResume} className="btn primary">
          💾 Save Resume
        </button>
        <button onClick={downloadResume} className="btn secondary">
          ⬇️ Download Resume
        </button>
      </section>
    </div>
  );
}
