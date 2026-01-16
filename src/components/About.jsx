export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-wrapper">

        {/* LEFT CONTENT */}
        <div className="about-content">

          {/* SECTION LABEL (NEW POSITION) */}
          <span className="section-label1">Why Mahaveer Gym</span>

          <h2>Where dedication meets results.</h2>

          <p>
           We train smarter, build strength, burn fat, and boost confidence.
          </p>

          <p>
            <strong>Address:</strong>Janardhan Prasad Singh Complex, Siddharthpuri Colony Road No. 1, Manpur, Gaya, Bihar – 823003 <br />
   <strong>Timings:</strong> 5:00 AM – 10:00 AM | 4:00 PM – 10:00 PM
          </p>

          <div className="about-points">
            <span>🏋️ Modern Equipment</span>
            <span>🥗 Budget-Friendly Diet Plans</span>
            <span>🔥 Certified Trainers</span>
            <span>💪 Real Transformations</span>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="about-stats">
          <div className="stat-box">
            <h3>500+</h3>
            <p>Active Members</p>
          </div>
          <div className="stat-box">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Dedication</p>
          </div>
        </div>

      </div>
    </section>
  );
}
