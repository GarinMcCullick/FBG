import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Apply from "./pages/Apply.js";
import FAQs from "./pages/FAQs.js";
import Ticket from "./pages/Ticket.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
}

export default App;
