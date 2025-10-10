import axios from 'axios';

const API_URL = "http://localhost:3006/api";

const api = {
  saveResume: async (data) => {
    // Change endpoint to resumebuilder
    const res = await fetch(`${API_URL}/resumebuilder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  getLatestResume: async () => {
    // Also get latest from resumebuilder
    const res = await fetch(`${API_URL}/resumebuilder/latest`);
    return res.json();
  },
};

export default api;
