import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
