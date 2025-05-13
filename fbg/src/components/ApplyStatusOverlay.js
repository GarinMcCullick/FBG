import React from "react";
import { FaDiscord } from "react-icons/fa";

const ApplyStatusOverlay = ({ status }) => {
  const globalName =
    JSON.parse(sessionStorage.getItem("user"))?.global_name || "Guest";

  const isKnownStatus = ["pending", "accepted", "denied"].includes(status);

  return (
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
          <>
            <br />
            Join the server below — If you are a new member our recruiters will
            be in touch soon. Feel free to hop in a voice call and start getting
            to know everyone!
          </>
        )}
        {status === "denied" && (
          <>
            Unfortunately, your application was not approved. <hr />
          </>
        )}
        {!isKnownStatus && (
          <>
            If this takes too long,{" "}
            <a href="/ticket" style={{ color: "#5865F2", fontWeight: 500 }}>
              click here to get support.
            </a>
          </>
        )}
      </p>

      {status === "accepted" && (
        <a
          href="https://discord.gg/tTvTwybhCM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="discord-login-button" type="button">
            <span className="discord-icon">
              <FaDiscord />
            </span>
            Join Discord Server
          </button>
        </a>
      )}
    </div>
  );
};

export default ApplyStatusOverlay;
