import React, { useState } from "react";
import './Recommended.css'; 


function Recommended() {
    return (
      <div>
        <div className="recommended">
            <div className="recommended-upper-heading">
                <p>RECOMMENDED FOR YOU</p>
            </div>
            <div className="recommended-heading">
            <p>Find The Most Suitable Products For Your <br/>Skin’s Unique Needs</p>
            </div>
            <div className="recommended-pick-list">
                <ul>
                    <li className="product"><img className="image" src={`${process.env.PUBLIC_URL}/assets/recommended-pick-1.png`}/>
                        <div className="product-text-reco">
                            <div>BOUNCY & FIRM SLEEP...</div>
                            <div className="price">₹240.99</div>
                        </div>
                        <div className="reviews">
                            <div className="reviews-img"><img src={`${process.env.PUBLIC_URL}/assets/rating.png/`} /></div>
                            <div className="reviews-text">15.3K Reviews</div>
                        </div>
                    </li>
                    <li className="product"><img className="image" src={`${process.env.PUBLIC_URL}/assets/recommended-pick-2.png`}/>                        
                        <div className="product-text-reco">
                            <div>CREAM SKIN</div>
                            <div className="price">₹240.99</div>
                        </div>
                        <div className="reviews">
                            <div className="reviews-img"><img src={`${process.env.PUBLIC_URL}/assets/rating.png`}/></div>
                            <div className="reviews-text">15.3K Reviews</div>
                        </div>
                    </li>
                    <li className="product"><img className="image" src={`${process.env.PUBLIC_URL}/assets/recommended-pick-3.png`}/>
                        <div className="product-text-reco">
                            <div>BOUNCY & FIRM MASK</div>
                            <div className="price">₹240.99</div>
                        </div>
                        <div className="reviews">
                            <div className="reviews-img"><img src={`${process.env.PUBLIC_URL}/assets/rating.png`}/></div>
                            <div className="reviews-text">15.3K Reviews</div>
                        </div>
                    </li>
                </ul>
            </div>
                <div className="arrow-buttons">
                    <button><img src={`${process.env.PUBLIC_URL}/assets/left.png`}/></button>
                    <button><img src={`${process.env.PUBLIC_URL}/assets/right1.png`}/></button>
                </div>
        </div>
      </div>
    );
  }
  
  export default Recommended;
