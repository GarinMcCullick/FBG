import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../App.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/" className="nav-logo-link">
          <img
            src={require("../assets/FROGBOOTS.png")}
            style={{ width: "2rem" }}
            alt="Frog Boots Logo"
          />
          FBG
        </Link>
      </div>
      <ul className="nav-links-list">
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/apply" className="nav-links">
            Apply
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faqs" className="nav-links">
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
