import React from "react";
import "../App.css";

const Landing = () => {
  return (
    <div>
      <div className="landing-page">
        <div className="landing-video-banner">
          <iframe
            width="1056"
            height="594"
            src="https://www.youtube.com/embed/MFxkuTuwucs"
            title="The BEST CLAN Vs The BIGGEST CLAN in Rust (OT VS R2)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="landing-content">
          <h1>Welcome to FBG</h1>
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
