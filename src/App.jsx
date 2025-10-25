import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Projects from "./pages/Projects";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="bg-mainBg font-secondary h-[100vh] overflow-hidden">
        <Navbar />
        {/* bg-[#313942] */}
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Connect" element={<Connect />} />
            <Route path="/Our Works" element={<Projects />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
