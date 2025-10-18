import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="bg-black ">
        <Navbar />
        {/* bg-[#313942] */}
        <div className="flex bg-gradient-to-b from-[#072F47] to-[#072e4765] h-[calc(100vh-64px)]">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Connect" element={<Connect />} />
            <Route path="/Our Works" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
