// src/templates/InfographicTemplate.jsx
import React from "react";

export default function InfographicTemplate({ data }) {
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

  const contactStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    fontSize: "13px",
    color: "#555",
    marginTop: "10px",
  };

  const contactItem = (label, value, link) =>
    value ? (
      <span>
        {label}:{" "}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    ) : null;

  return (
    <div
      style={{
        fontFamily: "Verdana, sans-serif",
        padding: "30px",
        background: "#fff7e6",
        color: "#333",
        lineHeight: "1.5",
      }}
    >
      {/* Header / Profile */}
      <header
        style={{
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "32px", color: "#ff6f61" }}>
          {basics.name || "Your Name"}
        </h1>
        <p style={{ margin: "5px 0", fontWeight: "bold", fontSize: "18px" }}>
          {basics.title || "Job Title"}
        </p>
        {basics.summary && (
          <p
            style={{
              marginTop: "10px",
              fontSize: "14px",
              color: "#555",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {basics.summary}
          </p>
        )}

        {/* Contact Info */}
        <div style={contactStyle}>
          {contactItem("Email", basics.email, `mailto:${basics.email}`)}
          {contactItem("Phone", basics.phone)}
          {contactItem("Location", basics.location)}
          {contactItem("LinkedIn", basics.linkedin, basics.linkedin)}
          {contactItem("GitHub", basics.github, basics.github)}
        </div>
      </header>

      {/* Skills */}
      {skills.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#ff6f61", marginBottom: "10px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {skills.map((s, i) => (
              <span
                key={i}
                style={{
                  background: "#ffe0d6",
                  padding: "5px 10px",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#ff6f61", marginBottom: "10px" }}>Experience</h2>
          {experience.map((e, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <strong>{e.role}</strong> — {e.company}
              <div style={{ fontSize: "12px", color: "#777" }}>
                {e.start} – {e.end || "Present"}
              </div>
              <p>{e.desc}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#ff6f61", marginBottom: "10px" }}>Education</h2>
          {education.map((ed, i) => (
            <p key={i}>
              <strong>{ed.degree}</strong> — {ed.school} ({ed.start} – {ed.end})
            </p>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#ff6f61", marginBottom: "10px" }}>Projects</h2>
          {projects.map((p, i) => (
            <div key={i}>
              <strong>{p.title}</strong>
              <p>{p.desc}</p>
              {p.tech && <em>{p.tech}</em>}
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#ff6f61", marginBottom: "10px" }}>Certifications</h2>
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
          <h2 style={{ color: "#ff6f61", marginBottom: "10px" }}>Awards</h2>
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
          <h2 style={{ color: "#ff6f61", marginBottom: "10px" }}>Languages</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {languages.map((l, i) => (
              <span
                key={i}
                style={{
                  background: "#ffe0d6",
                  padding: "5px 10px",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              >
                {l}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Interests */}
      {interests.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#ff6f61", marginBottom: "10px" }}>Interests</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {interests.map((int, i) => (
              <span
                key={i}
                style={{
                  background: "#ffe0d6",
                  padding: "5px 10px",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              >
                {int}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
