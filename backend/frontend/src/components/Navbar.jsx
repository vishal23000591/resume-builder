import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/logo.png" alt="RevaAI" className="logo" />
        <span className="brand-name">REVA AI</span>
      </div>
      <div className="nav-links">
        <a
  href="https://reva-ai-k7nm.onrender.com"
  className={location.pathname === "/home" ? "active" : ""}
  target="_blank"
  rel="noopener noreferrer"
>
  Home
</a>
        <Link to="/builder" className={location.pathname === "/builder" ? "active" : ""}>Builder</Link>
        <Link to="/preview" className={location.pathname === "/preview" ? "active" : ""}>Preview</Link>
        <Link to="/templates" className={location.pathname === "/templates" ? "active" : ""}>Templates</Link>
      </div>
    </nav>
  )
}
