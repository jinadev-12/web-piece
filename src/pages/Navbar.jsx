import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Our Works", path: "/Our Works" },
  { name: "About Us", path: "/Projects" },
  { name: "Reviews", path: "/Reviews" },
  { name: "Connect", path: "/Connect" },
  { name: "F A Q", path: "/FAQ" },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Mobile Promo Banner */}
      <div className="md:hidden text-xs bg-blue-800 text-center py-2 font-secondary text-white">
        70% off on Advanced JavaScript Course —{" "}
        <span className="underline">Tap to view</span>
      </div>

      {/* Navbar */}
      <nav className="bg-[lch(16.1_10.6_263.6)] text-white relative font-secondary shadow-[0_40px_60px_-10px_rgba(0,0,0,0.5)]">
        {/* Container */}
        <div className="flex justify-between h-16 items-center px-6">
          {/* Logo */}
          <div>
            <span className="uppercase text-lg font-primary tracking-wide hover:text-blue-400 transition">
              Webpiece
            </span>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center" onClick={toggleSidebar}>
            <i
              className={`ri-${
                sidebarOpen ? "close-line" : "menu-4-line"
              } text-2xl cursor-pointer hover:text-blue-400 transition`}
            ></i>
          </div>

          {/* Alert Section (Desktop) */}
          <div className="hidden md:flex justify-between items-center gap-4">
            <p className="text-xs">
              Up to 70% off on Advanced JavaScript Course
            </p>
            <button className="underline text-sm text-blue-500 hover:text-blue-400 transition">
              Tap to view!
            </button>
          </div>

          {/* Contact Link (Gradient Button) */}
          <div className="hidden md:block">
            <a
              href="#"
              className="text-sm p-[6px] px-6 rounded-full text-white font-medium
              bg-[#019eff] 
              hover:from-blue-500 hover:to-indigo-500
              transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Sidebar (Mobile Only) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#111733] text-white transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 md:hidden`}
        >
          <ul className="flex flex-col h-full gap-4 mt-6">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center rounded-l-full py-2 pl-4 pr-3 mx-3 transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md"
                      : "hover:bg-[#1b244a]"
                  }`
                }
              >
                <div
                  className={`h-12 w-[4px] rounded-tr-lg rounded-br-lg mr-5 transition-all duration-300 ${
                    link.path === window.location.pathname
                      ? "bg-gradient-to-b from-blue-400 to-purple-400"
                      : "bg-[#26ffe3]"
                  }`}
                ></div>

                <div className="flex items-center gap-2">
                  <img
                    src="https://greatstack.dev/_next/static/media/projects.3710561f.png"
                    alt=""
                    className="w-[18px] h-[16px]"
                  />
                  <span className="text-[14px]">{link.name}</span>
                </div>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Overlay (click to close sidebar) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
