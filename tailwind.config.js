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
        backgound: "#F5F5F5"       // 👈 Optional lighter shade for backgrounds
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 0.2, transform: 'translateY(0)' } // matches your watermark opacity
        },
      },
      animation: {
        fadeUp: 'fadeUp 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
