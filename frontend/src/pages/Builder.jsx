// src/pages/Builder.jsx
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import api from "../services/api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Builder() {
  const location = useLocation();
  const [template, setTemplate] = useState(location.state?.template || "classic");

  const [formData, setFormData] = useState({
    basics: { name: "", title: "", email: "", phone: "", summary: "" },
    experience: [],
    education: [],
    skills: [],       // Always empty by default
    projects: [],
    certifications: [],
    awards: [],
    languages: [],    // Always empty
    interests: [],    // Always empty
  });

  const previewRef = useRef();

  useEffect(() => {
    api.getLatestResume()
      .then((data) => {
        if (data) {
          // Remove skills, languages, interests from fetched data
          const cleanedData = { ...data };
          delete cleanedData.skills;
          delete cleanedData.languages;
          delete cleanedData.interests;

          // Merge with default formData to ensure empty arrays
          setFormData((prev) => ({ ...prev, ...cleanedData }));
        }
      })
      .catch((err) => console.error("Error fetching latest resume:", err));
  }, []);

  const downloadPDF = () => {
  const input = previewRef.current;

  const pdf = new jsPDF("p", "pt", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const inputWidth = input.scrollWidth;
  const inputHeight = input.scrollHeight;

  // Calculate scale to fit content to one page height while maintaining full width
  const scaleX = pageWidth / inputWidth; // Scale to fit width
  const scaleY = pageHeight / inputHeight; // Scale to fit height
  
  // Use the smaller scale to ensure content fits both width and height
  const scale = Math.min(scaleX, scaleY);

  // Calculate scaled dimensions
  const scaledWidth = inputWidth * scale;
  const scaledHeight = inputHeight * scale;

  // Center content on page
  const x = (pageWidth - scaledWidth) / 2;
  const y = (pageHeight - scaledHeight) / 2;

  pdf.html(input, {
    x,
    y,
    html2canvas: {
      scale: scale,
      useCORS: true,
      width: inputWidth,
      height: inputHeight
    },
    callback: function (doc) {
      doc.save("resume.pdf");
    },
    width: pageWidth,
    windowWidth: inputWidth
  });
};

  const templates = [
    "classic",
    "modern",
    "elegant",
    "creative",
    "minimalist",
    "infographic",
    "professional",
    "academic",
  ];

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      {/* Left: Form */}
      <div style={{ flex: 1, overflowY: "auto", maxHeight: "90vh" }}>
        <h2>Resume Builder</h2>
        <ResumeForm formData={formData} setFormData={setFormData} />

        {/* Template Selector */}
        <div style={{ marginTop: "1rem" }}>
          <h3>Choose Template</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            {templates.map((t) => (
              <button
                key={t}
                onClick={() => setTemplate(t)}
                style={{
                  ...btnStyle,
                  border: template === t ? "2px solid #007bff" : btnStyle.border,
                  background: template === t ? "#007bff" : btnStyle.background,
                  color: template === t ? "#fff" : "#007bff",
                }}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Preview + Download */}
      <div style={{ flex: 1, overflowY: "auto", maxHeight: "90vh" }}>
        <h2>Live Resume Preview</h2>
        <div
          ref={previewRef}
          style={{
            backgroundColor: "#fff",
            width: "794px",
            minHeight: "1123px",
            border: "1px solid #ddd",
            padding: "1rem",
            boxSizing: "border-box",
          }}
        >
          <ResumePreview data={formData} template={template} />
        </div>
        <button
          onClick={downloadPDF}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          ⬇️ Download PDF
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "0.4rem 0.8rem",
  border: "1px solid #007bff",
  background: "#f0f8ff",
  borderRadius: "4px",
  cursor: "pointer",
};
