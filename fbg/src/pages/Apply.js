import React from "react";
import "../App.css";

const Apply = () => {
  return (
    <div className="apply-page">
      <div className="apply-content">
        <form className="apply-form">
          <label>
            Hours Played:
            <input
              type="number"
              name="hoursPlayed"
              placeholder="Enter hours played"
            />
          </label>
          <label>
            Clan History:
            <textarea
              name="clanHistory"
              placeholder="Describe your clan history"
            ></textarea>
          </label>
          <label>
            Play Style:
            <select name="playStyle">
              <option value="pvp">PvP</option>
              <option value="raiding">Raiding</option>
              <option value="farming">Farming</option>
              <option value="baseBuilding">Base Building</option>
            </select>
          </label>
          <label>
            Steam Profile Link:
            <input
              type="url"
              name="steamProfile"
              placeholder="Enter your Steam profile link"
            />
          </label>
          <label>
            Country:
            <select name="country">
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
              name="whyJoin"
              placeholder="Explain why you want to join FBG"
            ></textarea>
          </label>
          <label>
            How Many Hours a Week Can You Play?:
            <select name="hoursPerWeek">
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
            <input type="checkbox" name="englishFluent" />
          </label>
          <label>
            Willing to Use Mic:
            <input type="checkbox" name="useMic" />
          </label>
          <label>
            Are You 21 or Older?:
            <input type="checkbox" name="age21Plus" />
          </label>
          <label>
            Agree to Rules (No hacking, cheating, exploiting, VAC bans, willing
            to be a team player, and must have at least 3k hours):
            <input type="checkbox" name="agreeToRules" />
          </label>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
