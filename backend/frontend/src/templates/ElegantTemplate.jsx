// src/templates/ElegantTemplate.jsx
import React from "react";

export default function ElegantTemplate({ data }) {
  if (!data) return <p>No resume data</p>;

  const {
    basics = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
    awards = [],
    languages = [],
    interests = [],
  } = data;

  return (
    <div style={{ fontFamily: "'Times New Roman', serif", padding: "30px", background: "#fafafa", color: "#333", lineHeight: "1.6", border: "1px solid #ccc", borderRadius: "12px" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ margin: "0", fontSize: "30px" }}>{basics.name || "Your Name"}</h1>
        <em style={{ fontSize: "16px", color: "#555" }}>{basics.title || "Job Title"}</em>
       <p style={{ margin: "4px 0" }}>
  {basics.email} | {basics.phone} {basics.location && `| ${basics.location}`}{" "}
  {basics.linkedin && <a href={basics.linkedin}>{basics.linkedin}</a>}{" "}
  {basics.github && <a href={basics.github}>{basics.github}</a>}
</p>


      </header>

      <hr style={{ margin: "15px 0", border: "0.5px solid #aaa" }} />

      {/* Summary */}
      {basics.summary && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #aaa" }}>Profile</h2>
          <p>{basics.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #aaa" }}>Experience</h2>
          {experience.map((e, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <h4 style={{ margin: "0" }}>{e.role} – {e.company}</h4>
              <small style={{ color: "#777" }}>{e.start} – {e.end || "Present"}</small>
              <p>{e.desc}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #aaa" }}>Education</h2>
          {education.map((ed, i) => (
            <p key={i}><strong>{ed.degree}</strong> — {ed.school} ({ed.start} – {ed.end})</p>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #aaa" }}>Skills</h2>
          <p>{skills.join(", ")}</p>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #aaa" }}>Projects</h2>
          {projects.map((p, i) => (
            <div key={i}>
              <strong>{p.title}</strong>
              <p>{p.desc}</p>
              {p.tech && <em>{p.tech}</em>}
            </div>
          ))}
        </section>
      )}

      {/* Certifications / Awards */}
      {(certifications.length > 0 || awards.length > 0) && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #aaa" }}>Achievements</h2>
          {certifications.map((c, i) => (
            <p key={i}>{c.title} — {c.issuer} ({c.year})</p>
          ))}
          {awards.map((a, i) => (
            <p key={i}>{a.title} ({a.year})</p>
          ))}
        </section>
      )}

      {/* Languages / Interests */}
      {(languages.length > 0 || interests.length > 0) && (
        <section>
          <h2 style={{ borderBottom: "1px solid #aaa" }}>Other</h2>
          {languages.length > 0 && <p><strong>Languages:</strong> {languages.join(", ")}</p>}
          {interests.length > 0 && <p><strong>Interests:</strong> {interests.join(", ")}</p>}
        </section>
      )}
    </div>
  );
}
