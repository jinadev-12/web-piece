/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#504ab9",
        sectionBg: "#1f293a ",
        sidebarBg: "#0f1628",
        navbarBg: "#030617",
        boxBg: "#414a5c",
        text: "#fff",
      },
      fontFamily: {
        primary: ["Orbitron", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: { height: "0", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-in",
      },
    },
  },
  plugins: [],
};
