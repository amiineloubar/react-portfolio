import React from "react";
import "../src/App.css";
import AboutPage from "./screens/AboutPage";
import HomePage from "./screens/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./screens/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
