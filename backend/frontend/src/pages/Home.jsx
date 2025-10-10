import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page home-page">

      {/* Hero Section */}
      <section className="hero">
        <h1>RevaAI — Professional Resume Builder</h1>
        <p>Create clean, ATS-friendly resumes with AI-assisted suggestions.</p>
        <Link to="/builder" className="btn primary">Start Building</Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose RevaAI?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>AI-Powered Suggestions</h3>
            <p>Get smart recommendations to improve your resume instantly.</p>
          </div>
          <div className="card">
            <h3>ATS-Friendly</h3>
            <p>Ensure your resume passes Applicant Tracking Systems with ease.</p>
          </div>
          <div className="card">
            <h3>Customizable Layouts</h3>
            <p>Choose from sleek, modern templates to stand out.</p>
          </div>
          <div className="card">
            <h3>One-Click Export</h3>
            <p>Download your resume in PDF format anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Build Your Resume?</h2>
        <p>Join thousands of professionals using RevaAI to land their dream jobs.</p>
        <Link to="/builder" className="btn primary">Get Started</Link>
      </section>

    </div>
  )
}
