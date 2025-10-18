import React from "react";
import project1 from "../assets/dummy1.jpg"; // add your project images
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
      title: "Digital Clock",
      desc: "A sleek and responsive digital clock built with vanilla JS.",
      img: project3,
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="h-[calc(100vh-64px)] overflow-hidden text-white py-16 font-primary w-full"
    >
      {/* container */}
      <div className="max-w-6xl mx-auto px-6 ">
        {/* title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-primary mb-2">
            Our <span className="text-[#019eff]">Work</span>
          </h2>
          <p className="text-gray-400 font-secondary tracking-wide text-[17px]">
            A glimpse of the projects we’ve built with passion and precision.
          </p>
        </div>

        {/* project container */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-[#11172b] rounded-2xl shadow-md hover:shadow-blue-500/20 overflow-hidden transition duration-300"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-52 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
