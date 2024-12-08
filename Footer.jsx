import React from "react";
import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h4>Subscribe to our newsletter</h4>
        <input type="email" placeholder="Enter your email" />
        <button>Get latest updates</button>
      </div>
      <div className="footer-links">
        <div>
          <h5>Company</h5>
          <ul>
            <li>About Us</li>
            <li>Corporate</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h5>Contact Us</h5>
          <ul>
            <li>Help & Support</li>
            <li>Partner with Us</li>
          </ul>
        </div>
        <div>
          <h5>Available in</h5>
          <ul>
            <li>Bangalore</li>
            <li>Delhi</li>
            <li>Mumbai</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
