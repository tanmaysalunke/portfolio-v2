/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        techbg: "#0a192f",
        techcard: "#112240",
        neonblue: "#64ffda",
        neonpurple: "#a78bfa",
        neongreen: "#7fffd4",
        neonpink: "#ff6ec7",
        glass: "rgba(17,36,64,0.7)",
      },
      fontFamily: {
        sans: ["Quicksand", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        neon: "0 0 8px #64ffda, 0 0 16px #64ffda",
      },
      backdropBlur: {
        glass: "8px",
      },
    },
  },
  plugins: [],
};
