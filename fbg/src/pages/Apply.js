import React, { useState, useEffect } from "react";
import "../App.css";
import ApplyLoginOverlay from "../components/ApplyLoginOverlay";
import { useAuth } from "../context/AuthContext"; // Import the AuthContext hook

const Apply = () => {
  const { user, checking } = useAuth(); // Access user and checking states from the context
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!checking) {
      setIsLoggedIn(!!user); // Set isLoggedIn to true if user exists, otherwise false
    }
  }, [user, checking]); // Re-run when user or checking state changes

  return (
    <div className="apply-page">
      <div className="apply-content">
        <form className="apply-form">
          {!isLoggedIn ? (
            <ApplyLoginOverlay />
          ) : (
            <>
              <label>
                Hours Played:
                <input
                  type="number"
                  name="hoursPlayed"
                  required
                  placeholder="Enter hours played"
                />
              </label>
              <label>
                Clan History:
                <textarea
                  required
                  name="clanHistory"
                  placeholder="Describe your clan history"
                ></textarea>
              </label>
              <label>
                Play Style:
                <select required name="playStyle">
                  <option value="select" disabled selected>
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
                />
              </label>
              <label>
                Country:
                <select required name="country">
                  <option value="select" disabled selected>
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
                ></textarea>
              </label>
              <label>
                How Many Hours a Week Can You Play?:
                <select required name="hoursPerWeek">
                  <option value="select" disabled selected>
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
                <input required type="checkbox" name="englishFluent" />
              </label>
              <label>
                Willing to Use Mic:
                <input required type="checkbox" name="useMic" />
              </label>
              <label>
                Are You 21 or Older?:
                <input required type="checkbox" name="age21Plus" />
              </label>
              <label>
                Agree to Rules (No hacking, cheating, exploiting, VAC bans,
                willing to be a team player, and must have at least 3k hours):
                <input required type="checkbox" name="agreeToRules" />
              </label>

              <button type="submit" className="apply-button">
                Submit Application
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Apply;
