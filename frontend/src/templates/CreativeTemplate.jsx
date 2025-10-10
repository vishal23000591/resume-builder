// src/templates/CreativeTemplate.jsx
import React from "react";

export default function CreativeTemplate({ data }) {
  if (!data) return <p>No resume data</p>;

  const { basics = {}, experience = [], education = [], skills = [], projects = [], certifications = [], awards = [], languages = [], interests = [] } = data;

  return (
    <div style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif", padding: "30px", background: "#f0f8ff", color: "#222", lineHeight: "1.5" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "32px", margin: "0", color: "#ff4500" }}>{basics.name || "Your Name"}</h1>
        <p style={{ fontWeight: "bold", fontSize: "18px" }}>{basics.title || "Job Title"}</p>
        <p>{basics.email} | {basics.phone} {basics.location && `| ${basics.location}`}</p>
        {basics.linkedin && <p><a href={basics.linkedin}>{basics.linkedin}</a></p>}
        {basics.github && <p><a href={basics.github}>{basics.github}</a></p>}
      </header>

      {basics.summary && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px dashed #ff4500" }}>Profile</h2>
          <p>{basics.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px dashed #ff4500" }}>Experience</h2>
          {experience.map((e, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <strong>{e.role}</strong> — {e.company}
              <div style={{ fontSize: "12px", color: "#555" }}>{e.start} – {e.end || "Present"}</div>
              <p>{e.desc}</p>
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px dashed #ff4500" }}>Education</h2>
          {education.map((ed, i) => (
            <p key={i}><strong>{ed.degree}</strong> — {ed.school} ({ed.start} – {ed.end})</p>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px dashed #ff4500" }}>Skills</h2>
          <p>{skills.join(", ")}</p>
        </section>
      )}

      {projects.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px dashed #ff4500" }}>Projects</h2>
          {projects.map((p, i) => (
            <div key={i}>
              <strong>{p.title}</strong>
              <p>{p.desc}</p>
              {p.tech && <em>{p.tech}</em>}
            </div>
          ))}
        </section>
      )}

      {(certifications.length > 0 || awards.length > 0) && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "2px dashed #ff4500" }}>Achievements</h2>
          {certifications.map((c, i) => <p key={i}>{c.title} — {c.issuer} ({c.year})</p>)}
          {awards.map((a, i) => <p key={i}>{a.title} ({a.year})</p>)}
        </section>
      )}

      {(languages.length > 0 || interests.length > 0) && (
        <section>
          {languages.length > 0 && <p><strong>Languages:</strong> {languages.join(", ")}</p>}
          {interests.length > 0 && <p><strong>Interests:</strong> {interests.join(", ")}</p>}
        </section>
      )}
    </div>
  );
}
