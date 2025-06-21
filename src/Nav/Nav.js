import React, { useState } from "react";
import './Nav.css'
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { PiPersonArmsSpreadThin } from "react-icons/pi";


function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div>
        <div className="nav-bar">
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <div className="logo">Luminara</div>
            <div>
            <ul className={`nav-items ${menuOpen ? "active" : ""}`}>
                <li>Skincare</li>
                <li>Body & Hair</li>
                <li>Gifting</li>
                <li>Skin Quiz</li>
                <li>About Us</li>
            </ul>
            </div>
            <div className="nav-icons">
                <CiSearch/>
                <CiShoppingBasket/>
                <PiPersonArmsSpreadThin/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Nav;
