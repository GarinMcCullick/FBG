import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/" className="nav-logo-link" onClick={closeMenu}>
          <img
            src={require("../assets/FROGBOOTS.png")}
            style={{ width: "2rem" }}
            alt="Frog Boots Logo"
          />
          FBG
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className="nav-toggle"
        onClick={toggleMenu}
        aria-label="Menu Toggle"
      >
        &#9776;
      </button>

      {/* Nav Links */}
      <ul className={`nav-links-list ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/apply" className="nav-links" onClick={closeMenu}>
            Apply
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faqs" className="nav-links" onClick={closeMenu}>
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
