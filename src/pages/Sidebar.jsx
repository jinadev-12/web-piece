import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Our Works", path: "/Our Works" },
  { name: "About Us", path: "/Projects" },
  { name: "Reviews", path: "/Reviews" },
  { name: "Connect", path: "/Connect" },
  { name: "F A Q", path: "/FAQ" },
];

export default function Sidebar() {
  return (
    <section className="md:block hidden">
      <div className="h-[100vh] w-[233px] border-r border-[#373f62] font-secondary bg-[#0d1224] text-white pt-8">
        <ul className="flex flex-col h-full gap-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center h-12 pl-5 rounded transition-colors duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#26FFE340]"
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
    </section>
  );
}
