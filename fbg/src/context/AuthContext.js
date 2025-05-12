// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("http://localhost:5000/auth/user", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          console.log("User data:", data); // Optionally keep the log for debugging

          // Save the user data in sessionStorage
          sessionStorage.setItem("user", JSON.stringify(data)); // Storing user data in sessionStorage

          setUser(data);
        }
      } catch (err) {
        console.error("Auth check failed", err);
      } finally {
        setChecking(false);
      }
    }

    // On component mount, try to get user data from sessionStorage
    const savedUser = sessionStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // If the user data is in sessionStorage, set it to state
      setChecking(false);
    } else {
      fetchUser(); // Fetch from the backend if not available in sessionStorage
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, checking, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
