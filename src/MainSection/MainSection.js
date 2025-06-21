import React from "react";
import './MainSection.css'

function MainSection() {
    return (
      <div>
        <div className="main-sec" >
            <div className="upper-heading">
                <p>BEST SKINCARE OF THE YEAR</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/assets/Group 27.png`} alt="Radiant Skin" className="background-img"/>
            <div class="heading">
                <p className="main-heading">ACHIEVE RADIANT SKIN WITH THE POWER OF NATURE’S FINEST INGREDIENTS.</p>
                <p className="sub-heading">Discover the perfect blend of nature and science, crafted to nourish, rejuvenate, and enhance your skin’s natural beauty.</p>
                <button>Explore More</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainSection;
