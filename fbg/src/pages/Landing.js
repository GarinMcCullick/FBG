import React from "react";
import "../App.css";
import LandingGallerySlider from "../components/LandingGallerySlider";

const Landing = () => {
  return (
    <div>
      <div className="landing-page">
        <div className="landing-video-banner">
          <video autoPlay loop muted className="landing-video">
            <source
              src={require("../assets/fbg-banner-video.mov")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="landing-content">
          <h1>Welcome to FBG</h1>
          <p>Your journey starts here.</p>
          <a href="/apply" className="btn btn-primary">
            Join FBG
          </a>
          <div className="quote-of-the-day">
            <h2>Quote of the Day</h2>
            <p>
              "The only limit to our realization of tomorrow is our doubts of
              today."
            </p>
            <p>- Franklin D. Roosevelt</p>
          </div>
          <div className="collage-slider-container">
            <LandingGallerySlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
