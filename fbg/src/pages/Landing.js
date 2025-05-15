import React from "react";
import "../App.css";
import LandingGallerySlider from "../components/LandingGallerySlider";
import { getQuoteOfTheDay } from "../helpers/quoteHelper";
import FloatingEmojiBackground from "../components/FloatingEmojiBackground";
import ak from "../assets/Assault_Rifle_icon.webp";
import thompson from "../assets/Thompson_icon.webp";
import m2 from "../assets/M249_icon.webp";
import chestpiece from "../assets/Metal_Chest_Plate_icon.webp";
import facemask from "../assets/Frostbite_icon.webp";

const Landing = () => {
  const { quote, gamertag } = getQuoteOfTheDay();

  return (
    <div>
      <div className="landing-page">
        <div className="landing-video-banner">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="landing-video"
          >
            <source
              src={require("../assets/fbg-banner-video.mov")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="landing-content">
          <FloatingEmojiBackground
            imageSrcs={[ak, thompson, m2, chestpiece, facemask]}
            count={60}
          />
          <h1>Welcome to FBG</h1>
          <p>Your journey starts here.</p>
          <a href="/apply" className="btn btn-primary">
            Join FBG
          </a>
          <div className="quote-of-the-day">
            <h2>Quote of the Day</h2>
            <p>"{quote}"</p>
            <p>- {gamertag}</p>
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
