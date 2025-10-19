import React from "react";
import project1 from "../assets/dummy1.jpg";
import project2 from "../assets/dummy2.jpg";
import project3 from "../assets/dummy3.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "A modern portfolio site built with React and Tailwind CSS.",
      img: project1,
      link: "#",
    },
    {
      id: 2,
      title: "Quiz App",
      desc: "An interactive JavaScript quiz app with score tracking.",
      img: project2,
      link: "#",
    },
    {
      id: 3,
      title: "Digital Clock",
      desc: "A sleek and responsive digital clock built with vanilla JS.",
      img: project3,
      link: "#",
    },
    {
      id: 4,
      title: "Weather App",
      desc: "A real-time weather app built with an API integration.",
      img: project3,
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen text-white py-16 w-full"
    >
      {/* container */}
      <div className="max-w-[1350px] mx-auto px-6">
        {/* title */}
        <div className=" mb-12">
          <h2 className="text-6xl font-medium font-primary mb-2">
            Our <span className="">Work</span>
          </h2>
          <p className="text-gray-400 font-secondary tracking-wide text-[17px]">
            A glimpse of the projects we’ve built with passion and precision.
          </p>
        </div>

        {/* project container */}
        <div
          className="grid gap-8 justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-[#11172b] border-[2px] border-transparent hover:border-[#019eff] hover:shadow-[0_0_10px_#019eff70] rounded-2xl overflow-hidden transition-all duration-200 flex flex-col items-center aspect-video"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
