import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Preview() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the project data passed from Projects.jsx
  const project = location.state;

  // If user opens Preview page directly without data
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f1628] text-white">
        <p>No project selected.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-[#504ab9] hover:bg-[#3f3a9d] px-5 py-2 rounded-md font-medium"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen  bg-[#0f1628] text-white flex flex-col items-center py-2 px-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 bg-[#504ab9]/80 hover:bg-[#504ab9] px-4 py-2 rounded-md font-semibold transition"
      >
        ← Back
      </button>

      {/* Glassmorphic Container */}
      <div className="max-w-4xl w-full lg:mt-[-40px] bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.1),inset_0_-4px_12px_rgba(0,0,0,0.4)]">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-6">{project.desc}</p>

        <img
          src={project.img}
          alt={project.title}
          className="rounded-xl mb-6 shadow-lg w-full object-cover"
        />

        {/* Action Buttons */}
        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#504ab9]/80 hover:bg-[#504ab9] text-white text-center rounded-xl py-3 font-semibold transition"
          >
            Live Preview
          </a>

          <a
            href={project.git}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white text-center rounded-xl py-3 font-semibold transition"
          >
            Source Code
          </a>

          <a
            href="#"
            className="bg-white/10 hover:bg-white/20 text-white text-center rounded-xl py-3 font-semibold transition"
          >
            Tech Stack
          </a>

          <a
            href="#"
            className="bg-red-600/80 hover:bg-red-600 text-white text-center rounded-xl py-3 font-semibold transition"
          >
            YouTube Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Preview;
