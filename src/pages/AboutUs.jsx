// src/components/AboutUs.jsx
import React from "react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-white text-gray-800 py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
            About us
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
          >
            We make simple tools that help teams move faster.
          </h2>
          <p className="text-gray-600 mb-6 max-w-prose">
            Founded in 2018 by former product builders, we remove busywork from
            teams through small, reliable automations and clear design. We
            believe great products come from focused teams — not bloated tools.
          </p>

          {/* Stats */}
          <div className="flex gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
              <div className="text-xl font-bold text-gray-900">2.5k+</div>
              <div className="text-sm text-gray-500">Teams</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
              <div className="text-xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
              <div className="text-xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-4">
            <a
              href="/tour"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white font-semibold shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition"
            >
              Take the Tour
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-teal-50 to-white p-3">
            <img
              src="https://via.placeholder.com/400x300.png?text=Founder+Photo"
              alt="Founder smiling in office"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
