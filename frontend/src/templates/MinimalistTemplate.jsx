// src/templates/MinimalistTemplate.jsx
import React from "react";

export default function MinimalistTemplate({ data }) {
  if (!data) return <p>No resume data</p>;

  const { basics = {}, experience = [], education = [], skills = [], projects = [], certifications = [], awards = [], languages = [], interests = [] } = data;

  return (
    <div style={{ fontFamily: "Helvetica, sans-serif", padding: "30px", color: "#111", background: "#fff", lineHeight: "1.6" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "28px", margin: "0" }}>{basics.name || "Your Name"}</h1>
        <p style={{ fontWeight: "bold" }}>{basics.title || "Job Title"}</p>
        <p>{basics.email} | {basics.phone} {basics.location && `| ${basics.location}`}</p>
        {basics.linkedin && <p><a href={basics.linkedin}>{basics.linkedin}</a></p>}
        {basics.github && <p><a href={basics.github}>{basics.github}</a></p>}
      </header>

      {basics.summary && <p style={{ marginBottom: "20px" }}>{basics.summary}</p>}

      {experience.length > 0 && experience.map((e, i) => (
        <div key={i} style={{ marginBottom: "15px" }}>
          <strong>{e.role}</strong> — {e.company} <span style={{ fontSize: "12px", color: "#555" }}>{e.start} – {e.end || "Present"}</span>
          <p>{e.desc}</p>
        </div>
      ))}

      {education.length > 0 && education.map((ed, i) => (
        <p key={i}><strong>{ed.degree}</strong> — {ed.school} ({ed.start} – {ed.end})</p>
      ))}

      {skills.length > 0 && <p><strong>Skills:</strong> {skills.join(", ")}</p>}

      {projects.length > 0 && projects.map((p, i) => (
        <div key={i}><strong>{p.title}</strong><p>{p.desc}</p>{p.tech && <em>{p.tech}</em>}</div>
      ))}

      {(certifications.length > 0 || awards.length > 0) && (
        <div>
          {certifications.map((c, i) => <p key={i}>{c.title} — {c.issuer} ({c.year})</p>)}
          {awards.map((a, i) => <p key={i}>{a.title} ({a.year})</p>)}
        </div>
      )}

      {(languages.length > 0 || interests.length > 0) && (
        <div>
          {languages.length > 0 && <p><strong>Languages:</strong> {languages.join(", ")}</p>}
          {interests.length > 0 && <p><strong>Interests:</strong> {interests.join(", ")}</p>}
        </div>
      )}
    </div>
  );
}
