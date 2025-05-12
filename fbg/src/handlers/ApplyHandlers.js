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
    } else {
      throw new Error("Failed to fetch application status");
    }
  } catch (err) {
    console.error("Error fetching application status:", err);
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

// Function to handle form submission
export const handleApplySubmit = async (e, formData, user, setSubmitting) => {
  e.preventDefault(); // Prevent default form submission

  // Check if the user is logged in with Discord
  if (!user || !user.id) {
    console.log("User not logged in:", user);
    alert("You must be logged in with Discord to submit an application.");
    return;
  }

  setSubmitting(true); // Set submitting state to true to show loading state

  try {
    // Send POST request with application data
    const response = await axios.post(
      "http://localhost:5000/apply", // Update to your API endpoint
      {
        ...formData,
        id: user.id, // Attach discord_id to the application data
      },
      {
        withCredentials: true, // Include cookies if necessary
      }
    );

    if (response.status === 200) {
      alert("Application submitted successfully!");
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (err) {
    // Handle error during submission
    console.error("Submission error:", err);
    alert("Failed to submit application.");
  } finally {
    setSubmitting(false); // Set submitting state back to false
  }
};
