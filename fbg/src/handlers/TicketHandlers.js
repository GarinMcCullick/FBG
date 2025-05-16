import axios from "axios";

export const handleTicketSubmit = async (
  e,
  issue,
  setIssue,
  setLoading,
  setSuccessMessage,
  setSubmitted
) => {
  e.preventDefault();
  setLoading(true);

  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user || !user.id) {
      window.location.href = "/apply"; // ✅ Redirect to /apply if session is invalid
      return;
    }

    const payload = {
      issue,
      id: user.id,
    };

    await axios.post("http://localhost:5000/ticket/create", payload);

    setIssue("");
    setSuccessMessage("Your ticket has been submitted.");
    setSubmitted(true);
  } catch (error) {
    console.error("Error submitting ticket:", error);
    setSuccessMessage("There was an error submitting your ticket.");
  } finally {
    setLoading(false);
  }
};
