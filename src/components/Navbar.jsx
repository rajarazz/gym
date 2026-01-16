import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">

             <img src={Logo} alt="Lion’s Fitness"  style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
             }}
               />

          <span>The Mahaveer Gym</span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#exercise-section" onClick={() => setMenuOpen(false)}>Exercises</a>
          {/* <a href="#calculators" onClick={() => setMenuOpen(false)}>Calculators</a> */}
          <a href="#owner" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          {/* <a href="#diet" onClick={() => setMenuOpen(false)}>Diet</a> */}
        </nav>

        {/* Call to Action (Desktop only) */}
        <div className="nav-cta">
          <a href="#owner">
            <button>Join Now</button>
          </a>
        </div>

        {/* 🔥 HAMBURGER (MOBILE ONLY) */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}
