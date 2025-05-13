// src/handlers/ApplyHandlers.js
import axios from "axios";

export const handleStatusCheck = async () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user || !user.id) {
    console.error("Invalid user object or missing user ID:", user);
    return null;
  }

  try {
    const response = await axios.get("http://localhost:5000/apply/status", {
      params: { id: user.id },
      withCredentials: true,
    });

    if (response.status === 200) {
      const status = response.data.status; // ✅ Get only the status string
      sessionStorage.setItem("applicationStatus", JSON.stringify(status));
      return status; // ✅ Return only the status string
    } else if (response.status === 404) {
      // Explicitly set sessionStorage to null when the application is not found
      sessionStorage.setItem("applicationStatus", JSON.stringify(null));
      console.warn("Application not found"); // Optional, to help with debugging
      return null; // Return null to indicate no application found
    } else {
      throw new Error("Failed to fetch application status");
    }
  } catch (err) {
    console.error("Error fetching application status:", err);
    sessionStorage.setItem("applicationStatus", JSON.stringify(null)); // Ensure null is set in case of error
    return null;
  }
};

// Function to handle changes in form input
export const handleApplyChange = (e, formData, setFormData) => {
  const { name, type, value, checked } = e.target;

  // Update form data based on input type (checkbox or regular input)
  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  });
};

export const handleApplySubmit = async (
  e,
  formData,
  user,
  setSubmitting,
  setApplicationStatus // <-- Add this
) => {
  e.preventDefault();

  if (!user || !user.id) {
    console.log("User not logged in:", user);
    alert("You must be logged in with Discord to submit an application.");
    return;
  }

  setSubmitting(true);

  try {
    const response = await axios.post(
      "http://localhost:5000/apply",
      {
        ...formData,
        id: user.id,
      },
      {
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      const status = response.data.status || "pending"; // or whatever your backend sends
      sessionStorage.setItem("applicationStatus", status);
      setApplicationStatus(status); // ✅ Update status in the frontend
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error("Submission error:", err);
    alert("Failed to submit application.");
  } finally {
    setSubmitting(false);
  }
};
