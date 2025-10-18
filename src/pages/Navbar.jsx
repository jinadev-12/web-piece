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
        New web projects just released —{" "}
        <span className="underline">Check them out</span>
      </div>

      {/* Navbar */}
      <nav
        className="
      bg-[lch(16.1_10.6_263.6)]
      bg-[#202f44]
       text-white relative font-secondary shadow-[0_40px_50px_-5px_rgba(0,0,0,0.1)]"
      >
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
              Exclusive drop: new web projects just released
            </p>
            <button className="underline text-sm text-blue-500 hover:text-blue-400 transition">
              Tap to view!
            </button>
          </div>

          {/* Contact Link (Gradient Button) */}
          <div className="hidden md:block">
            <a
              href="#"
              className="text-sm py-[6px] px-6 rounded text-white font-normal
              bg-[#019eff] 
              hover:bg-[rgb(56,179,255)] 
              transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Sidebar (Mobile Only) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[lch(16.1_10.6_263.6)] text-white transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 md:hidden`}
        >
          <ul className="flex flex-col h-full gap-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center h-12 pl-5 transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#019eff]"
                      : "bg-transparent"
                  }`
                }
              >
                {/* <div className="h-12 w-[4px] rounded-tr-lg rounded-br-lg bg-[#26ffe3] mr-5"></div> */}
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
