import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Apply from "./pages/Apply.js"; // Import Apply component

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
