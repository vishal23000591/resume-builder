// src/pages/TemplateChooser.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TemplateChooser() {
  const navigate = useNavigate();

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "/templates/classic.jpeg",
      description:
        "A traditional, professional template with clear sections for experience, education, and skills. Perfect for corporate roles.",
    },
    {
      id: "modern",
      name: "Modern",
      preview: "/templates/modern.jpeg",
      description:
        "A clean and modern layout with sidebar for quick overview and colorful headings. Ideal for tech and creative roles.",
    },
    {
      id: "elegant",
      name: "Elegant",
      preview: "/templates/elegant.jpeg",
      description:
        "Sophisticated design with elegant fonts and subtle borders. Great for creative, consulting, or design positions.",
    },
    {
      id: "creative",
      name: "Creative",
      preview: "/templates/creative.jpeg",
      description:
        "Bright colors, icons, and a visually appealing layout. Perfect for designers, marketers, and media roles.",
    },
    {
      id: "minimalist",
      name: "Minimalist",
      preview: "/templates/minimalist.jpeg",
      description:
        "Simple and clean layout with focus on content. Ideal for formal corporate applications.",
    },
    {
      id: "infographic",
      name: "Infographic",
      preview: "/templates/infographic.jpeg",
      description:
        "Visual representation of skills and experience using charts and graphics. Great for creative and tech resumes.",
    },
    {
      id: "professional",
      name: "Professional",
      preview: "/templates/professional.jpeg",
      description:
        "Muted colors and structured layout emphasizing achievements and metrics. Perfect for executive roles.",
    },
    {
      id: "academic",
      name: "Academic",
      preview: "/templates/academic.jpeg",
      description:
        "Focus on publications, certifications, and research experience. Ideal for academic or teaching positions.",
    },
  ];

  const chooseTemplate = (id) => {
    navigate("/builder", { state: { template: id } });
  };

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        Choose Your Resume Template
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "2rem",
        }}
      >
        Pick a template that best represents your professional profile. Click on a template to start building your resume.
      </p>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {templates.map((t) => (
          <div
            key={t.id}
            onClick={() => chooseTemplate(t.id)}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              cursor: "pointer",
              borderRadius: "12px",
              textAlign: "center",
              width: "250px",
              background: "#fff",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={t.preview}
              alt={t.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "0.5rem",
              }}
            />
            <h4 style={{ margin: "0.5rem 0" }}>{t.name}</h4>
            <p style={{ fontSize: "0.85rem", color: "#555" }}>{t.description}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          color: "#777",
          fontSize: "0.9rem",
        }}
      >
        Tip: You can change your template later in the builder if you want to try a different style.
      </div>
    </div>
  );
}
