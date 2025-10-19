import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/", icon: "fi fi-rr-house-blank " },
  { name: "Our Works", path: "/Our Works", icon: "fi fi-rr-master-plan " },
  { name: "About Us", path: "/Projects", icon: "fi fi-rr-file-user  " },
  { name: "Reviews", path: "/Reviews", icon: "fi fi-rr-star " },
  { name: "Connect", path: "/Connect", icon: "fi fi-rr-comments " },
  { name: "F A Q", path: "/FAQ", icon: "fi fi-rr-comments-question " },
];

export default function Sidebar() {
  return (
    <section className="md:block hidden">
      <div className=" w-[233px] border-r border-[#ffffff57] font-secondary bg-transparent text-white pt-8">
        <ul className="flex flex-col h-full gap-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center h-12 pl-5 rounded transition-colors duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#019eff]"
                    : "bg-transparent"
                }`
              }
            >
              {/* <div className="h-12 w-[4px] rounded-tr-lg rounded-br-lg bg-[#26ffe3] mr-5"></div> */}
              <div className="flex items-center gap-2">
                <i className={link.icon}></i>{" "}
                <span className="text-[14px]">{link.name}</span>
              </div>
            </NavLink>
          ))}
        </ul>
      </div>
    </section>
  );
}
