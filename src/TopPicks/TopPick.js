import React, { useState } from "react";
import './TopPick.css'; 


function TopPick() {
    return (
      <div>
        <div className="top-pick">
            <div className="top-upper-heading">
                <p>TOP PICKS</p>
            </div>
            <div className="top-heading">
            <p>Find The Best Pick For A Glowing and Healthy Skin</p>
            </div>
            <div className="top-pick-list">
                <ul>
                    <li className="product"><img className="image" src="/assets/top-pick-1.png"/>
                        <div className="product-text">
                            <div>SUMMER SKINCARE</div>
                            <div>12 Products</div>
                        </div>
                    </li>
                    <li className="product"><img className="image" src="/assets/top-pick-2.png"/>                        
                        <div className="product-text">
                            <div>BODYCARE</div>
                            <div>8 Products</div>
                        </div>
                    </li>
                    <li className="product"><img className="image" src="/assets/top-pick-3.png"/>
                        <div className="product-text">
                            <div>BESTSELLERS</div>
                            <div>18 Products</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
  
  export default TopPick;
