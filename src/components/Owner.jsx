import ownerImg from "../assets/owner.webp";

export default function Owner() {
  return (
    <section className="section dark owner-section" id="owner">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><span className="section-label" id="main5">Meet the Owner</span></div>
      <div className="owner-wrapper">

        {/* LEFT: IMAGE */}

        <div className="owner-image">
          <img src={ownerImg} alt="- Gym Owner" />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="owner-content">

          {/* SECTION LABEL (NEW POSITION) */}
          <span className="section-label" id="main4">Meet the Owner</span>

          <h2 className="owner-name">(Owner Name)</h2>
          <p className="owner-role">Founder & Head Trainer</p>

          <p className="owner-desc">
            A passionate fitness coach dedicated to helping people unlock their potential.
            Specialist in:
            🏋️ Strength Training
            🔥 Fat Loss
            🥗 Practical Diet Planning
            💪 Transformation Coachinga
          </p>

          <div className="owner-highlights">
            <span>🏋️ Certified Trainer</span>
            <span>🔥 Transformation Specialist</span>
            <span>🥗 Budget Diet Expert</span>
          </div>

          <div className="owner-actions">
            <a href="tel:+918809966333" className="owner-btn call"> Call Now</a>
            <a href="https://wa.me/918809966333" className="owner-btn whatsapp"> WhatsApp</a>
            <a href="https://www.instagram.com/themahaveergym/" className="owner-btn insta"> Instagram</a>
          </div>

        </div>
      </div>
    </section>
  );
}
