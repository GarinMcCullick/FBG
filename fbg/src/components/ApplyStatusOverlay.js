import React from "react";
import { FaDiscord } from "react-icons/fa";

const ApplyStatusOverlay = ({ status }) => {
  const globalName =
    JSON.parse(sessionStorage.getItem("user"))?.global_name || "Guest";

  return (
    <div className={`apply-form-login-overlay status-${status}`}>
      <div className={`apply-form status-${status}-card`}>
        <h2 className="overlay-title">
          {status === "pending"
            ? "Application Under Review ⏳"
            : status === "accepted"
            ? "Congratulations 🎉"
            : status === "denied"
            ? "Application Denied ❌"
            : "Checking Application Status..."}
        </h2>

        <p className="overlay-message">
          Welcome back, <strong>{globalName}</strong>!<br />
          {status === "pending" && (
            <>Your application is currently under review.</>
          )}
          {status === "accepted" && (
            <>You have been accepted! Please continue by logging in below.</>
          )}
          {status === "denied" && (
            <>Unfortunately, your application was not approved.</>
          )}
        </p>

        {(status === "accepted" || status === "denied") && (
          <button className="discord-login-button" type="button">
            <span className="discord-icon">
              <FaDiscord />
            </span>
            Login with Discord
          </button>
        )}
      </div>
    </div>
  );
};

export default ApplyStatusOverlay;
