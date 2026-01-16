import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Footer() {
  const [showDev, setShowDev] = useState(false);

  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          {/* Brand */}
          <div className="footer-brand">
            <h3
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <img
                src={Logo}  // ✅ Correct for Vite
                alt="logo"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
              />
              The Mahaveer Gym
            </h3>

            <p>
              Fitness is not a one-time effort, it’s a lifestyle. We here to guide every step of your journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#hero">Home</a>
            <a href="#owner">Contact Us</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>

          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📍 Janardhan Prasad Singh Complex,
               Siddharthpuri Colony Road No. 1, Manpur, Gaya, Bihar – 823003</p>
            <p>📞 +91 8809966333</p>
           
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} The Mahaveer Gym. All rights reserved.
        </div>
      </footer>

    
    </>
  );
}
