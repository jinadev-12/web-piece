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
      <img
        src={bg1}
        alt=""
        className="fixed top-0 left-0 -z-10 w-full h-full object-cover object-center"
      />
      <Navbar />

      <div
        className="flex h-[calc(100vh-64px)] overflow-hidden bg-[lch(8.8_3.2_249)]
"
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
