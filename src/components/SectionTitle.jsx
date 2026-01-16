import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <span className="underline"></span>
    </div>
  );
}

export default SectionTitle;
