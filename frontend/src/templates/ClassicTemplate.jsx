// src/templates/ClassicTemplate.jsx
import React from "react";

export default function ClassicTemplate({ data }) {
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
    <div style={{ fontFamily: "Georgia, serif", padding: "30px", color: "#000", lineHeight: "1.5" }}>
      {/* Header */}
      <header style={{ borderBottom: "3px solid #000", marginBottom: "15px" }}>
        <h1 style={{ margin: "0", fontSize: "28px" }}>{basics.name || "Your Name"}</h1>
        <p style={{ margin: "2px 0", fontSize: "16px", fontWeight: "bold" }}>
          {basics.title || "Job Title"}
        </p>
        
<p style={{ fontSize: "12px", margin: "2px 0" }}>
  {basics.email} | {basics.phone} {basics.location && `| ${basics.location}`}
</p>
<p style={{ fontSize: "12px", margin: "2px 0" }}>
  {basics.linkedin && <a href={basics.linkedin}>{basics.linkedin}</a>}{" "}
  {basics.github && <a href={basics.github}>{basics.github}</a>}
</p>

      </header>

      {/* Summary */}
      {basics.summary && (
        <section style={{ marginBottom: "15px" }}>
          <h2 style={{ borderBottom: "1px solid #000" }}>Profile</h2>
          <p>{basics.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2 style={{ borderBottom: "1px solid #000" }}>Experience</h2>
          {experience.map((e, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <strong>{e.role}</strong>, {e.company}
              <div style={{ fontSize: "12px", color: "#555" }}>
                {e.start} – {e.end || "Present"}
              </div>
              <p>{e.desc}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2 style={{ borderBottom: "1px solid #000" }}>Education</h2>
          {education.map((ed, i) => (
            <p key={i}>
              <strong>{ed.degree}</strong> — {ed.school} ({ed.start} – {ed.end})
            </p>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2 style={{ borderBottom: "1px solid #000" }}>Skills</h2>
          <p>{skills.join(", ")}</p>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: "15px" }}>
          <h2 style={{ borderBottom: "1px solid #000" }}>Projects</h2>
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
        <section style={{ marginBottom: "15px" }}>
          <h2 style={{ borderBottom: "1px solid #000" }}>Achievements</h2>
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
          <h2 style={{ borderBottom: "1px solid #000" }}>Other</h2>
          {languages.length > 0 && <p><strong>Languages:</strong> {languages.join(", ")}</p>}
          {interests.length > 0 && <p><strong>Interests:</strong> {interests.join(", ")}</p>}
        </section>
      )}
    </div>
  );
}
