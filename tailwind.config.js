// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lufga: ["Lufga", "sans-serif"], // 👈 Custom font
      },
      colors: {
        primary: "#215270",        // 👈 Primary color
        primaryLight: "#DDE6EB", 
        backgound:"#F3F3F3"  // 👈 Optional lighter shade for backgrounds
      },
    },
  },
  plugins: [],
};
