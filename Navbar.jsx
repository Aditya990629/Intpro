import React from "react";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mera Bestie</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Categories</li>
        <li>Personalized Gifts</li>
        <li>Offers</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-cart">
        <button>Cart</button>
        <button>Hi, Profile</button>
      </div>
    </nav>
  );
}

export default Navbar;
