// src/templates/ModernTemplate.jsx
import React from "react";

export default function ModernTemplate({ data }) {
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
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px", background: "#f4f6f9", color: "#222", lineHeight: "1.6" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "35%",             // increased from 30%
            minWidth: "250px",        // ensures proper width on small screens
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            wordBreak: "break-word",  // wrap long URLs
          }}
        >
          <h2 style={{ margin: "0", fontSize: "22px", color: "#007bff" }}>
            {basics.name || "Your Name"}
          </h2>
          <p style={{ fontWeight: "bold" }}>{basics.title || "Job Title"}</p>
          <p style={{ fontSize: "13px" }}>{basics.email}</p>
          <p style={{ fontSize: "13px" }}>
            {basics.phone} {basics.location && `| ${basics.location}`}
          </p>
          <p style={{ fontSize: "13px" }}>
            {basics.linkedin && <a href={basics.linkedin}>{basics.linkedin}</a>}{" "}
            {basics.github && <a href={basics.github}>{basics.github}</a>}
          </p>

          {skills.length > 0 && (
            <>
              <h3>Skills</h3>
              <ul>{skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </>
          )}

          {languages.length > 0 && (
            <>
              <h3>Languages</h3>
              <ul>{languages.map((l, i) => <li key={i}>{l}</li>)}</ul>
            </>
          )}

          {interests.length > 0 && (
            <>
              <h3>Interests</h3>
              <ul>{interests.map((int, i) => <li key={i}>{int}</li>)}</ul>
            </>
          )}
        </aside>

        {/* Main Content */}
        <main style={{ width: "65%", padding: "10px 20px" }}>
          {basics.summary && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ borderBottom: "2px solid #007bff", paddingBottom: "4px" }}>Profile</h3>
              <p>{basics.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ borderBottom: "2px solid #007bff", paddingBottom: "4px" }}>Experience</h3>
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
              <h3 style={{ borderBottom: "2px solid #007bff", paddingBottom: "4px" }}>Education</h3>
              {education.map((ed, i) => (
                <p key={i}><strong>{ed.degree}</strong> — {ed.school} ({ed.start} – {ed.end})</p>
              ))}
            </section>
          )}

          {projects.length > 0 && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ borderBottom: "2px solid #007bff", paddingBottom: "4px" }}>Projects</h3>
              {projects.map((p, i) => (
                <div key={i}>
                  <strong>{p.title}</strong>
                  <p>{p.desc}</p>
                  {p.tech && <em>{p.tech}</em>}
                </div>
              ))}
            </section>
          )}

          {certifications.length > 0 && (
            <section style={{ marginBottom: "20px" }}>
              <h3 style={{ borderBottom: "2px solid #007bff", paddingBottom: "4px" }}>Certifications</h3>
              {certifications.map((c, i) => (
                <p key={i}>{c.title} — {c.issuer} ({c.year})</p>
              ))}
            </section>
          )}

          {awards.length > 0 && (
            <section>
              <h3 style={{ borderBottom: "2px solid #007bff", paddingBottom: "4px" }}>Awards</h3>
              {awards.map((a, i) => (
                <p key={i}>{a.title} ({a.year})</p>
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
