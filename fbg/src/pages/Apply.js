import React from "react";
import "../App.css";

const Apply = () => {
  return (
    <div>
      <div className="apply-overlay"></div>
      <div className="apply-page">
        <div className="apply-content">
          <h1>Welcome to FBG</h1>
          <p>Your journey starts here.</p>
          <a href="#apply" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apply;
