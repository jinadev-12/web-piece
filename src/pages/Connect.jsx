import React from "react";

function Connect() {
  return (
    <section
      className="w-full h-[calc(100vh-64px)]
     overflow-y-auto bg-sectionBg text-white px-6 py-12 "
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

        {/* content container */}
        <div className="max-w-[1350px] scale-[0.9] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:bg-boxBg/30 lg:border lg:border-text/10 lg:p-8 lg:rounded-2xl">
          {/* Left */}
          <div className="w-full lg:w-2/5 space-y-8 text-center lg:text-left">
            {/* title & text */}
            <div>
              <p className="font-semibold mb-3 text-accent">Get in touch.</p>
              <h3 className="text-3xl font-medium text-text/80 leading-tight">
                Discuss Your <br /> Chemical Solution Needs
              </h3>
              <p className="text-sm text-text/60 mt-4">
                Have a project in mind? Let’s work together! Fill out the form
                below and I’ll get back to you within 24 hours.
              </p>
            </div>

            {/* main contact buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/+919074109054"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366]/20 border border-[#25D366]/40 rounded-lg hover:bg-[#25D366]/30 transition-colors"
              >
                <i className="ri-whatsapp-fill text-[#25D366] text-xl"></i>
                <span className="font-medium">Say hi on WhatsApp</span>
              </a>

              <a
                href="https://discord.gg/yourDiscordLink"
                target="_blank"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent/10 border border-accent/40 rounded-lg hover:bg-accent/20 transition-colors"
              >
                <i className="ri-discord-fill text-accent text-xl"></i>
                <span className="font-medium">Join our Discord</span>
              </a>
            </div>

            {/* social links */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-text/60 hover:text-[#0A66C2] transition-colors text-2xl"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="text-text/60 hover:text-white transition-colors text-2xl"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://t.me/yourTelegramLink"
                target="_blank"
                className="text-text/60 hover:text-[#229ED9] transition-colors text-2xl"
              >
                <i className="ri-telegram-fill"></i>
              </a>
              <a
                href="mailto:youremail@gmail.com"
                className="text-text/60 hover:text-accent transition-colors text-2xl"
              >
                <i className="ri-mail-fill"></i>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] bg-text/10 h-full"></div>

          {/* Right */}
          <div className="w-full lg:w-1/2 bg-boxBg/30 border border-text/10 p-6 sm:p-8 rounded-2xl lg:bg-transparent lg:border-0 lg:p-0">
            <form
              action="https://formspree.io/f/xldodran"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label className="block font-medium mb-1 text-text/80">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-text/20 bg-transparent rounded-lg px-4 py-2 focus:ring-1 focus:ring-accent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-text/80">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                  title="Please enter a valid Gmail address"
                  className="w-full border border-text/20 bg-transparent rounded-lg px-4 py-2 focus:ring-1 focus:ring-accent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-text/80">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full border border-text/20 bg-transparent rounded-lg px-4 py-2 focus:ring-1 focus:ring-accent outline-none"
                  required
                ></textarea>
              </div>

              <button className="w-full bg-accent text-mainBg font-medium py-3 rounded-lg hover:opacity-80 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* title */}
    </section>
  );
}

export default Connect;
