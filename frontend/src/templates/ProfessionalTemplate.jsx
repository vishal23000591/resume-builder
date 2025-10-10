// src/templates/ProfessionalTemplate.jsx
import React from "react";

export default function ProfessionalTemplate({ data }) {
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
    <div
      style={{
        fontFamily: "Georgia, serif",
        padding: "40px",
        background: "#f4f4f4",
        color: "#222",
        lineHeight: "1.6",
      }}
    >
      {/* Header */}
      <header
        style={{
          textAlign: "center",
          borderBottom: "3px solid #333",
          marginBottom: "25px",
          paddingBottom: "10px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "30px" }}>
          {basics.name || "Your Name"}
        </h1>
        {basics.title && (
          <p style={{ fontWeight: "bold", margin: "5px 0" }}>
            {basics.title}
          </p>
        )}
        <p style={{ fontSize: "14px" }}>
          {basics.email && `${basics.email} | `}
          {basics.phone && `${basics.phone} | `}
          {basics.location && basics.location}
        </p>
        {basics.linkedin && <p>{basics.linkedin}</p>}
        {basics.github && <p>{basics.github}</p>}
        {basics.website && <p>{basics.website}</p>}
      </header>

      {/* Summary */}
      {basics.summary && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Summary</h2>
          <p>{basics.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Experience</h2>
          {experience.map((e, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <strong>{e.role || "Role"}</strong>
              {e.company && ` — ${e.company}`}
              <div style={{ fontSize: "12px", color: "#555" }}>
                {e.start} – {e.end || "Present"}
              </div>
              {e.desc && <p>{e.desc}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Education</h2>
          {education.map((ed, i) => (
            <div key={i} style={{ marginBottom: "8px" }}>
              <strong>{ed.degree || "Degree"}</strong>
              {ed.school && ` — ${ed.school}`}
              <div style={{ fontSize: "12px", color: "#555" }}>
                {ed.start} – {ed.end}
              </div>
              {ed.desc && <p>{ed.desc}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Projects</h2>
          {projects.map((p, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <strong>{p.name || "Project"}</strong>
              {p.link && (
                <span style={{ fontSize: "12px", marginLeft: "8px" }}>
                  [{p.link}]
                </span>
              )}
              {p.desc && <p>{p.desc}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Skills</h2>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Certifications</h2>
          {certifications.map((c, i) => (
            <p key={i}>
              {c.title} — {c.issuer} ({c.year})
            </p>
          ))}
        </section>
      )}

      {/* Awards */}
      {awards.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Awards</h2>
          {awards.map((a, i) => (
            <p key={i}>
              {a.title} ({a.year})
            </p>
          ))}
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Languages</h2>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {languages.map((lang, i) => (
              <li key={i}>
                {lang.language} {lang.fluency && `— ${lang.fluency}`}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Interests */}
      {interests.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ borderBottom: "1px solid #333" }}>Interests</h2>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {interests.map((int, i) => (
              <li key={i}>{int}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
