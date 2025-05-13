import React, { useState } from "react";
import { handleTicketSubmit } from "../handlers/TicketHandlers";
import Loader from "../components/Loader";

const Ticket = () => {
  const [issue, setIssue] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="ticket-container">
      <div className="ticket-card">
        <h1 className="ticket-title">Submit a Ticket</h1>
        <form
          className="ticket-form"
          onSubmit={(e) =>
            handleTicketSubmit(
              e,
              issue,
              setIssue,
              setLoading,
              setSuccessMessage,
              setSubmitted
            )
          }
        >
          <div>
            <label htmlFor="issue" className="ticket-label">
              Describe your issue
            </label>
            <textarea
              id="issue"
              name="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
              rows={6}
              className="ticket-textarea"
              disabled={submitted}
            />
          </div>
          <button
            type="submit"
            disabled={loading || submitted}
            className="ticket-submit-btn"
          >
            {loading ? (
              <Loader />
            ) : submitted ? (
              "Ticket Submitted"
            ) : (
              "Submit Ticket"
            )}
          </button>
        </form>

        {successMessage && (
          <p className="ticket-success-message">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Ticket;
