import React from "react";
import "../App.css";
import { FaDiscord } from "react-icons/fa";

const ApplyLoginOverlay = () => {
  return (
    <div className="apply-form-login-overlay">
      <h2 className="overlay-title">Login Required</h2>
      <p className="overlay-message">
        Please log in to continue with your application.
      </p>
      <button className="discord-login-button" type="button">
        <span className="discord-icon">
          <FaDiscord />
        </span>
        Login with Discord
      </button>
    </div>
  );
};

export default ApplyLoginOverlay;
