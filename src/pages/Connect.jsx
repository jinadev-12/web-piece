import React from "react";

function Connect() {
  return (
    // CONNECT
    <section
      id="projects"
      className="text-text w-full h-screen overflow-hidden bg-sectionBg"
    >
      {/* container */}
      <div className="max-w-[1350px] h-full mx-auto px-6 py-16 md:pb-24 overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide">
        {/* title */}
        <div className="mb-16 text-center">
          <span className="py-2 px-4 text-sm rounded-full bg-boxBg/20 mb-4 md:mb-6 inline-block text-text">
            Our Works
          </span>
          <h2 className="text-2xl lg:text-3xl max-w-[900px] mx-auto font-medium mb-3 text-text">
            Have a project in mind? Let’s work together! Fill out the form below
            and I’ll get back to you within 24 hours.
          </h2>
        </div>

        {/* content container */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* get in touch */}
          <div className="flex flex-col justify-between space-y-8 text-center lg:text-left w-full lg:w-2/5">
            {/* intro */}
            <div>
              <p className="font-semibold mb-3 text-text">Get in touch.</p>
              <p className="text-3xl sm:text-4xl mb-8 leading-[1.2] text-text/70">
                Discuss Your <br />
                Chemical <br />
                Solution Needs
              </p>
              <p className="text-sm tracking-wide text-text/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus quidem fugiat. Amet consectetur adipisicing elit
                Possimus quidem fugiat.
              </p>
            </div>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
              {/* WhatsApp */}
              <a
                href="https://wa.me/yourNumber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366]/20 border border-[#25D366]/40 rounded-lg hover:bg-[#25D366]/30 transition-colors"
              >
                <i className="ri-whatsapp-fill text-[#25D366] text-xl"></i>
                <span className="font-medium">Say hi on WhatsApp</span>
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg/yourDiscordLink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent/10 border border-accent/40 rounded-lg hover:bg-accent/20 transition-colors"
              >
                <i className="ri-discord-fill text-accent text-xl"></i>
                <span className="font-medium text-text">Join our Discord</span>
              </a>
            </div>

            {/* social icons */}
            <div className="mt-8 flex justify-center lg:justify-start gap-4 text-text/60">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-accent"
              >
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                className="hover:text-accent"
              >
                <i className="ri-linkedin-box-fill text-xl"></i>
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                className="hover:text-accent"
              >
                <i className="ri-instagram-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* message form */}
          <div className="w-full lg:w-1/2 border-[1px] border-accent bg-boxBg  p-6 sm:p-8 rounded-lg ">
            <form
              action="https://formspree.io/f/yourFormID"
              method="POST"
              className="space-y-4"
            >
              {/* name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-left font-medium text-text mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border bg-transparent border-text/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-left font-medium text-text mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-transparent border-text/20 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              {/* project details */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-left font-medium text-text mb-1"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full border bg-transparent border-text/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-accent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-mainBg font-medium py-3 rounded-lg hover:opacity-80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
