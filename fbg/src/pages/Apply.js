import React, { useState, useEffect } from "react";
import "../App.css";
import ApplyLoginOverlay from "../components/ApplyLoginOverlay";
import ApplyStatusOverlay from "../components/ApplyStatusOverlay";
import { useAuth } from "../context/AuthContext";
import {
  handleApplyChange,
  handleApplySubmit,
} from "../handlers/ApplyHandlers";
import { handleStatusCheck } from "../handlers/ApplyHandlers"; // Import the status check handler

const Apply = () => {
  const { user, checking } = useAuth(); // Use directly from context
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState(null); // State for application status

  useEffect(() => {
    // If there's a user, check their application status
    const fetchStatus = async () => {
      if (user) {
        const status = await handleStatusCheck(); // Fetch the status
        setApplicationStatus(status); // Set the status in state
      }
    };

    fetchStatus();
  }, [user]); // Only run when the user changes

  if (checking) return null; // Optionally, show loading spinner or nothing while checking

  // Logic to determine what to display based on user and application status
  return (
    <div className="apply-page">
      <div className="apply-content">
        <form
          className="apply-form"
          onSubmit={(e) => handleApplySubmit(e, formData, user, setSubmitting)}
        >
          {!user ? (
            <ApplyLoginOverlay /> // Show login overlay if no user is found
          ) : applicationStatus === null ? (
            // Show form if user exists but no application status
            <>
              <label>
                Hours Played:
                <input
                  type="number"
                  name="hoursPlayed"
                  required
                  placeholder="Enter hours played"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                />
              </label>
              <label>
                Clan History:
                <textarea
                  required
                  name="clanHistory"
                  placeholder="Describe your clan history"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                ></textarea>
              </label>
              <label>
                Play Style:
                <select
                  required
                  name="playStyle"
                  defaultValue="select"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                >
                  <option value="select" disabled>
                    select
                  </option>
                  <option value="pvp">PvP</option>
                  <option value="raiding">Raiding</option>
                  <option value="farming">Farming</option>
                  <option value="baseBuilding">Base Building</option>
                </select>
              </label>
              <label>
                Steam Profile Link:
                <input
                  required
                  type="url"
                  name="steamProfile"
                  placeholder="Enter your Steam profile link"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                />
              </label>
              <label>
                Country:
                <select
                  required
                  name="country"
                  defaultValue="select"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                >
                  <option value="select" disabled>
                    Select your country
                  </option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="in">India</option>
                  <option value="jp">Japan</option>
                  <option value="cn">China</option>
                  <option value="br">Brazil</option>
                  <option value="za">South Africa</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Why Do You Want to Join?:
                <textarea
                  required
                  name="whyJoin"
                  placeholder="Explain why you want to join FBG"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                ></textarea>
              </label>
              <label>
                How Many Hours a Week Can You Play?:
                <select
                  required
                  name="hoursPerWeek"
                  defaultValue="select"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                >
                  <option value="select" disabled>
                    select
                  </option>
                  <option value="0-8">0-8</option>
                  <option value="8-12">8-12</option>
                  <option value="12-20">12-20</option>
                  <option value="24-36">24-36</option>
                  <option value="40+">40+</option>
                </select>
              </label>
              <label>
                Are You Fluent in English?:
                <input
                  required
                  type="checkbox"
                  name="englishFluent"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                />
              </label>
              <label>
                Willing to Use Mic:
                <input
                  required
                  type="checkbox"
                  name="useMic"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                />
              </label>
              <label>
                Are You 21 or Older?:
                <input
                  required
                  type="checkbox"
                  name="age21Plus"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                />
              </label>
              <label>
                Agree to Rules (No hacking, cheating, exploiting, VAC bans,
                willing to be a team player, and must have at least 3k hours):
                <input
                  required
                  type="checkbox"
                  name="agreeToRules"
                  onChange={(e) => handleApplyChange(e, formData, setFormData)}
                />
              </label>

              <button
                type="submit"
                className="apply-button"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </>
          ) : (
            // Show application status page if status is not null
            <ApplyStatusOverlay status={applicationStatus} />
          )}
        </form>
      </div>
    </div>
  );
};

export default Apply;
