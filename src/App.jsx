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
import Preview from "./pages/Preview";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Full-screen Preview page (no Navbar, no Sidebar) */}
        <Route path="/Preview" element={<Preview />} />

        {/* ✅ All other pages inside main layout */}
        <Route
          path="*"
          element={
            <div className="bg-mainBg font-secondary min-h-screen overflow-hidden lg:h-[100vh]">
              <Navbar />
              <div className="flex">
                <Sidebar />
                {/* Inner routes for your main pages */}
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
