import React from "react";
import bg1 from "../assets/bg1.png";

function Home() {
  return (
    // Hero Section
    <section className="w-full h-screen overflow-y-scroll bg-sectionBg text-white py-16 ">
      {/* container */}
      <div className="max-w-[1350px] mx-auto px-6 flex flex-col gap-12 pb-8 lg:pb-0">
        {/* title wrapper */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* title */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafting Web Experiences That Stand Out
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-white">WebPiece</span> — a
              creative portfolio showcasing my web design and development
              projects. I design sleek, responsive, and performance-driven
              websites that help brands grow and ideas come to life. Every
              project is a piece of the bigger picture — building digital
              experiences that truly connect.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 transition">
                View Projects
              </button>
              <button className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-black transition">
                Let’s Connect
              </button>
            </div>
          </div>

          {/* image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={bg1}
              alt="WebPiece showcase"
              className="w-full max-w-[400px] md:max-w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* features */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* feature 1 */}
          <div className="flex-1 bg-boxBg border border-white/10 rounded-2xl p-6 hover:border-white/30 transition">
            <h3 className="text-xl font-semibold mb-2">
              Modern & Responsive Design
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every project is crafted with a focus on flexibility and visual
              impact — ensuring a flawless experience across all screen sizes.
            </p>
          </div>

          {/* feature 2 */}
          <div className="flex-1 bg-boxBg border border-white/10 rounded-2xl p-6 hover:border-white/30 transition">
            <h3 className="text-xl font-semibold mb-2">
              Optimized for Performance
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I develop fast-loading, efficient websites using modern tools and
              clean code — because speed and user experience matter.
            </p>
          </div>

          {/* feature 3 */}
          <div className="flex-1 bg-boxBg border border-white/10 rounded-2xl p-6 hover:border-white/30 transition">
            <h3 className="text-xl font-semibold mb-2">
              Creative & Scalable Solutions
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From concept to code, I build digital experiences designed to grow
              — balancing creativity with performance and structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
