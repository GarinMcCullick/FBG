import React from "react";
import "../App.css";

const Landing = () => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="landing-page">
        <div className="landing-content">
          <h1>Welcome to Our Website</h1>
          <p>Your journey starts here.</p>
          <a href="#about" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
