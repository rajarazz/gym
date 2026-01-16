import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Logo from "../assets/logo.png";
import GymImage1 from "../assets/gymimage1.webp";
import GymImage2 from "../assets/gymimage2.webp";
import GymImage3 from "../assets/gymimage3.webp";
import GymImage4 from "../assets/gymimage4.webp";
import GymImage5 from "../assets/gymimage5.webp";
import GymImage6 from "../assets/gymimage6.webp";

const galleryImages = [
  GymImage1,
   GymImage2,
    GymImage3,
     GymImage4,
      GymImage5,
       GymImage6,
  
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="section dark" id="gallery">
      <SectionTitle
        title="Gallery"
        subtitle="Real training moments at The Mahaveer Gym"
      />

      <div className="gallery-wrapper" >
        {galleryImages.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setActiveImage(img)}
            style={{border:"3px Solid  rgba(255, 165, 0, 0.15)"}}
          >
            <img src={img}  alt={`Gym gallery ${index + 1}`}  />

            <div className="gallery-overlay">
              <span className="gallery-brand" >
                <img src={Logo} alt="image" style={{height: "30px", width: "30px", borderRadius: "50%" }}/>
                The Mahaveer Gym
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 IMAGE MODAL */}
      {activeImage && (
        <div
          className="gallery-modal"
          onClick={() => setActiveImage(null)}
        >
          <span className="gallery-close">✕</span>
          <img src={activeImage} alt="Full view" />
        </div>
      )}
    </section>
  );
}
