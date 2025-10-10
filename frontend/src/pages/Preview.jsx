import React, { useState, useEffect } from "react";
import ResumePreview from "../components/ResumePreview";
import api from "../services/api";

export default function Preview({ liveData }) {
  const [backendData, setBackendData] = useState(null);

  // Fetch latest resume from backend on mount
  useEffect(() => {
    api
      .getLatestResume()
      .then((data) => {
        if (data) {
          // Keep everything from backend but reset skills, languages, interests
          setBackendData({
            ...data,
            skills: [],
            languages: [],
            interests: [],
          });
        }
      })
      .catch((err) => console.error("Error fetching latest resume:", err));
  }, []);

  // Decide what to show: live form data if present, else backend
  // Ensure skills, languages, interests are always user-added only
  const dataToShow = liveData
    ? {
        ...liveData,
        skills: liveData.skills || [],
        languages: liveData.languages || [],
        interests: liveData.interests || [],
      }
    : backendData;

  return (
    <div className="preview-page">
      <h2>Resume Preview</h2>
      <ResumePreview data={dataToShow} />
    </div>
  );
}
