import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Home from "./pages/Home";
import bg1 from "./assets/bg1.png";
import Connect from "./pages/Connect";

function App() {
  return (
    <Router>
      <img
        src={bg1}
        alt=""
        className="fixed top-0 left-0 -z-10 w-full h-full object-cover object-center"
      />
      <Navbar />

      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connect" element={<Connect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
