import React from "react";
import "../App.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <a href="#home" className="nav-logo-link">
          <img
            src={require("../assets/FROGBOOTS.png")}
            style={{ width: "2rem" }}
            alt="Frog Boots Logo"
          />
          FBG
        </a>
      </div>
      <ul className="nav-links-list">
        <li className="nav-item">
          <a href="#home" className="nav-links">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-links">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-links">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-links">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
