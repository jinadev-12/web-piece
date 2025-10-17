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
      <div className="md:hidden text-xs bg-blue-800 text-center py-2 font-primary text-white">
        70% off on Advanced JavaScript Course —{" "}
        <span className="underline">Tap to view</span>
      </div>

      {/* Navbar */}
      <nav className="font-primary bg-transparent text-white border-b border-[#ffffff57] relative">
        {/* Container */}
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div>
            <span className="text-xl tracking-wider hover:text-blue-400 transition">
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
            <img
              className="w-6 h-6"
              src="https://greatstack.dev/_next/static/media/flame.de2aa96f.gif"
              alt="🔥"
            />
            <p className="text-xs">
              Up to 70% off on Advanced JavaScript Course
            </p>
            <button className="text-sm p-[5px] px-4 bg-blue-600 hover:bg-blue-700 transition rounded-full">
              LIMITED TIME SALE!
            </button>
          </div>

          {/* Contact Link */}
          <div className="hidden lg:block">
            <a href="#" className="underline hover:text-blue-400 transition">
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
          <ul className="flex flex-col h-full gap-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center  rounded transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#26FFE340]"
                      : "bg-transparent"
                  }`
                }
              >
                <div className="h-12 w-[4px] rounded-tr-lg rounded-br-lg bg-[#26ffe3] mr-5"></div>
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
