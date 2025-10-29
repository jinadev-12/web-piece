import React from "react";
import project1 from "../assets/thumbnail2.jpg";
import project2 from "../assets/thumbnail1.jpg";
import project3 from "../assets/thumbnail1.jpg";
import project4 from "../assets/thumbnail2.jpg";



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
      img: project4,
      link: "#",
    },
  ];

  return (
    // Products / our works
    <section
      id="projects"
      className="w-full h-[calc(100vh-64px)]
overflow-y-auto bg-sectionBg text-white px-6 py-12"
    >
      {/* container */}
      <div className="max-w-[1350px] mx-auto flex flex-col">
        {/* title */}
        <div className="text-center mb-10">
          <span className="py-2 px-4 text-sm rounded-full bg-boxBg/20 mb-2 md:mb-6 inline-block text-text">
            Our Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-2">
            Have Questions?
            <br /> Here Are Quick Answers
          </h2>
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
              className="bg-boxBg border-[2px] border-[#ffffff38] hover:border-accent  rounded-2xl overflow-hidden transition-all duration-200 flex flex-col items-center aspect-video"
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
