import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Apply from "./pages/Apply.js"; // Import Apply component
import FAQs from "./pages/FAQs.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
