import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="westernsattel__cta">
      <div className="westernsattel__cta-content">
        <p>Ihr  neuer Westernsattel nach Maß</p>
        <h3>Preisliste und Datenblätter anfordern.</h3>
      </div>
			<div className="westernsattel__cta-btn">
				<button type='button'>Preisliste laden</button>
			</div>
    </div>
  );
};

export default CTA;
