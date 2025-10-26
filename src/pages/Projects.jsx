import React from "react";
import project1 from "../assets/thumbnail-elysian.jpg";
import project2 from "../assets/thumbnail-givewell.jpg";
import project3 from "../assets/thumbnail-beauforte.jpg";
import project4 from "../assets/thumbnail-roamara.jpg";



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
      className="text-text w-full h-screen overflow-hidden bg-sectionBg"
    >
      {/* container */}
      <div className="max-w-[1350px] h-full mx-auto px-6 py-16 md:py-20 overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide">
        {/* title */}
        <div className="mb-16 md:mb-20 text-center">
          <span className="py-2 px-4 text-sm rounded-full bg-boxBg/20 mb-4 md:mb-6 inline-block text-text">
            Our Works
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl max-w-[900px] mx-auto font-medium mb-3 text-text">
            A glimpse of the projects we’ve built with passion and precision.
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
              className="bg-boxBg border-[2px] border-transparent hover:border-accent hover:shadow-[0_0_10px_rgba(38,255,227,0.44)] rounded-2xl overflow-hidden transition-all duration-200 flex flex-col items-center aspect-video"
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
