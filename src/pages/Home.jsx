import React from "react";
import bg1 from "../assets/bg1.png";

function Home() {
  return (
    // main
    <div className="w-full  bg-sectionBg  h-[calc(100vh-64px)] overflow-hidden">
      {/* container */}
      <div className="w-[90%] max-w-[1000px] h-full font-secondary flex justify-center ">
        {/* head and button*/}
        <div className="flex flex-col  ml-16 mt-44 h-full">
          <h1 className="text-[110px] text-white font-primary font-normal ">
            WebPiece
          </h1>
          <p className="text-white tracking-wider ">
            Design That Speaks. Websites That Work.
          </p>
          {/* buttons */}
          <div className="flex gap-5 mt-5">
            {/* 1st button */}
            <button className="text-white font-light border  rounded-tr-full pl-4 rounded-bl-full rounded-br-full flex gap-3 items-center justify-center transition-all duration-400 hover:text-[#019eff] hover:border-[#019eff] hover:scale-105">
              <span className="">Projects</span>
              <i class="ri-arrow-right-circle-fill  text-4xl"></i>
            </button>
            {/* line */}
            <div class="w-px h-9 my-auto  bg-gray-400"></div>

            {/* 2nd button */}
            <p className="flex items-center text-white gap-2 cursor-pointer hover:text-[#019eff]">
              <i class="ri-home-wifi-fill  bg-black rounded-full text-xl px-1"></i>
              <span className="">Connect </span>
            </p>
          </div>
        </div>
        {/* hero-img */}
        <div className="w-full bg-black h-auto   bg-transparent ">
          <img src={bg1} alt="" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
