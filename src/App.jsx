import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Home from "./pages/Home";
import bg1 from "./assets/bg1.png";
import Connect from "./pages/Connect";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        {/* bg-[#313942] */}
        <div className="flex bg-[linear-gradient(to_bottom,_#072f47a2_0%,_#072f47a2_20%,_lch(8.8_3.2_249_/1)_100%)] h-screen">
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
