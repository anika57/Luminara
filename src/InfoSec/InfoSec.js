import React from "react";
import './InfoSec.css'

function InfoSec() {
    return (
      <div>
        <div className="info-sec">
            <div className="info-sec-1">
                <div className="info-sec-img">
                    <img src={`${process.env.PUBLIC_URL}/assets/hand.png`}/>
                </div>
                <div className="info-sec-text">
                    <p className="info-heading">ACHIEVE RADIANT HANDS WITH LUMINARA</p>
                    <p className="info-sub">Indulge your hands in deep hydration and nourishment with the pure essence of nature. Experience soft, smooth, and youthful skin with every touch.</p>
                    <div className="info-button">
                        <button>Learn More →</button>
                    </div>
                </div>
            </div>
            <div className="info-sec-2">
                <div className="info-sec-text">
                    <p className="info-heading">ACHIEVE RADIANT FACE WITH LUMINARA</p>
                    <p className="info-sub">Reveal your skin’s natural glow with the perfect blend of hydration and nourishment. Let Luminara rejuvenate, refresh, and enhance your beauty every day.</p>
                    <div className="info-button">
                        <button>Learn More →</button>
                    </div>
                </div>
                <div className="info-sec-img">
                    <img src={`${process.env.PUBLIC_URL}/assets/face.png`}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default InfoSec;
