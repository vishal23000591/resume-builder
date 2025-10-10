import React from "react";
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import ElegantTemplate from "../templates/ElegantTemplate";
import CreativeTemplate from "../templates/CreativeTemplate";
import MinimalistTemplate from "../templates/MinimalistTemplate";
import InfographicTemplate from "../templates/InfographicTemplate";
import ProfessionalTemplate from "../templates/ProfessionalTemplate";
import AcademicTemplate from "../templates/AcademicTemplate";

export default function ResumePreview({ data, template }) {
  if (!data) return <div className="preview-empty"><p>No resume data yet — start filling the form</p></div>;

  // Only render arrays if they exist and have length
  const cleanedData = { ...data };
  ["experience","education","projects","certifications","awards","skills","languages","interests"].forEach((key) => {
    if (!data[key] || data[key].length === 0) cleanedData[key] = undefined;
  });

  switch (template) {
    case "modern": return <ModernTemplate data={cleanedData} />;
    case "elegant": return <ElegantTemplate data={cleanedData} />;
    case "creative": return <CreativeTemplate data={cleanedData} />;
    case "minimalist": return <MinimalistTemplate data={cleanedData} />;
    case "infographic": return <InfographicTemplate data={cleanedData} />;
    case "professional": return <ProfessionalTemplate data={cleanedData} />;
    case "academic": return <AcademicTemplate data={cleanedData} />;
    default: return <ClassicTemplate data={cleanedData} />;
  }
}
