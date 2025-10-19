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
      <div className="bg-black font-secondary h-[100vh] overflow-hidden">
        <Navbar />
        {/* bg-[#313942] */}
        <div className="flex bg-gradient-to-b from-[lch(16.1_10.6_263.6)] to-[#072e4765] ">
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
