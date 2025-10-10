// src/templates/AcademicTemplate.jsx
import React from "react";

export default function AcademicTemplate({ data }) {
  if (!data) return <p>No resume data</p>;

  const {
    basics = {},
    education = [],
    experience = [],
    projects = [],
    skills = [],
    awards = [],
    certifications = [],
  } = data;

  return (
    <div style={{ fontFamily: "'Times New Roman', serif", padding: "30px", color: "#111", lineHeight: "1.5" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ margin: 0, fontSize: "28px" }}>{basics.name || "Your Name"}</h1>
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>{basics.title || "Student / Researcher"}</p>
        <p style={{ fontSize: "14px" }}>
          {basics.email} | {basics.phone} {basics.location && `| ${basics.location}`}
        </p>
        {basics.linkedin && <p>{basics.linkedin}</p>}
        {basics.github && <p>{basics.github}</p>}
      </header>

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Education</h2>
          {education.map((ed, i) => (
            <p key={i}><strong>{ed.degree}</strong> — {ed.school} ({ed.start} – {ed.end})</p>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Projects</h2>
          {projects.map((p, i) => (
            <div key={i}>
              <strong>{p.title}</strong>
              <p>{p.desc}</p>
              {p.tech && <em>{p.tech}</em>}
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Experience</h2>
          {experience.map((e, i) => (
            <p key={i}><strong>{e.role}</strong> — {e.company} ({e.start} – {e.end || "Present"})</p>
          ))}
        </section>
      )}

      {/* Skills / Certifications / Awards */}
      {skills.length > 0 && <p><strong>Skills:</strong> {skills.join(", ")}</p>}
      {certifications.length > 0 && <p><strong>Certifications:</strong> {certifications.map(c => c.title).join(", ")}</p>}
      {awards.length > 0 && <p><strong>Awards:</strong> {awards.map(a => a.title).join(", ")}</p>}
    </div>
  );
}
