import React from "react";
import './Footer.css'

function Footer() {
    return (
      <div className="footer">
        <div className="footer-links">
            <p className="footer-logo">Luminara</p>
            <div>
            <ul>
                <li className="footer-heading">MY PAGES</li>
                <li className="footer-item">Skincare</li>
                <li className="footer-item">About us</li>
                <li className="footer-item">Body & Hair</li>
                <li className="footer-item">Gifting</li>
                <li className="footer-item">Skin Quiz</li>
            </ul>
            </div>
            <div>
            <ul>
                <li className="footer-heading">COMPANY</li>
                <li className="footer-item">Our Story</li>
                <li className="footer-item">Certified Organic</li>
                <li className="footer-item">Sustainability</li>
                <li className="footer-item">Blog</li>
                <li className="footer-item">Careers</li>
                <li className="footer-item">Affiliate</li>
            </ul>
            </div>
            <div>
            <ul>
                <li className="footer-heading">CUSTOMER CARE</li>
                <li className="footer-item">Shop</li>
                <li className="footer-item">FAQ</li>
                <li className="footer-item">Order Tracking</li>
                <li className="footer-item">Promotions</li>
                <li className="footer-item">Shipping</li>
                <li className="footer-item">Reviews</li>
            </ul>
            </div>
        </div>
        <div className="form">
            <p>JOIN OUR NEWSLETTER</p>
            <div>
                <input type="text" placeholder="Enter Your Email Id"/>  
                <button>→</button>
            </div>
        </div>
        <div className="footer-cond">
            <p>©Luminara.All Rights Reserved.</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
        </div>
      </div>
    );
  }
  
  export default Footer;
