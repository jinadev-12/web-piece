import React from "react";
import bg1 from "../assets/bg1.png";

function Home() {
  return (
    // main
    <div className="w-full h-[calc(100vh-64px)] bg-transparent ">
      {/* container */}
      <div className="w-[90%] max-w-[1000px] h-full font-secondary flex justify-between">
        {/* head and button*/}
        <div className="flex flex-col  ml-16 mt-44 h-full">
          <h1 className="text-[110px] text-white font-primary font-normal ">
            WEBPIECE 
          </h1>
          <p className="text-white tracking-wider ">
            Design That Speaks. Websites That Work.
          </p>
          {/* buttons */}
          <div className="flex gap-5 mt-5">
            {/* 1st button */}
            <button className="text-white font-light border   rounded-tr-full pl-4 rounded-bl-full rounded-br-full flex gap-3 items-center justify-center">
              Projects{" "}
              <i class="ri-arrow-right-circle-fill text-white text-4xl"></i>
            </button>
            {/* line */}
            <div class="w-px h-9 my-auto  bg-gray-400"></div>

            {/* 2nd button */}
            <p className="flex items-center gap-2 cursor-pointer">
              <i class="ri-home-wifi-fill text-white bg-black rounded-full text-xl px-1"></i>
              <span className="text-white">Connect </span>
            </p>
          </div>
        </div>
        {/* hero-img */}
        <div className="w-auto h-[400px] mt-44 bg-transparent">
          <img src={bg1} alt="" className="w-full h-full object-cover bg-transparent"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
