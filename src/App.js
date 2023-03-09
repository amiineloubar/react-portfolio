import React, { lazy, Suspense } from "react";
import "../src/App.css";
import HomePage from "./screens/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const text = "testing";
const AboutPage = lazy(() => import("./screens/AboutPage"));
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about-me"
            element={
              <Suspense fallback="Loading...">
                <AboutPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
