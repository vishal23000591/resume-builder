import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Preview from "./pages/Preview";
import TemplateChooser from "./pages/TemplateChooser";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          {/* Redirect root to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Home page */}
          <Route path="/home" element={<Home />} />

          {/* Template chooser */}
          <Route path="/templates" element={<TemplateChooser />} />

          {/* Resume Builder */}
          <Route path="/builder" element={<Builder />} />

          {/* Resume Preview */}
          <Route path="/preview" element={<Preview />} />

          {/* Catch-all → redirect to home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </div>
  );
}
