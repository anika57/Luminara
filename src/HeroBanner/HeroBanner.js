import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={`${process.env.PUBLIC_URL}/assets/face-pic.png`} alt="Hero Banner" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p>A GENTLE TOUCH OF PURE, UNIVERSAL GOODNESS IN EVERY CREAM</p>
        </div>
        <div className="hero-heading">
          <p>Wrap Your Skin in a Luxurious Embrace of Nature’s Pure Goodness</p>
        </div>
        <div className="hero-button">
          <button>View Details →</button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
