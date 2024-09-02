/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        overlay: "#03a9fa",
        textColor: "#111",
      },
    },
    fontFamily: {
      RobotoSlab: ["Roboto Slab", "serif"],
    },
  },

  variants: {
    extend: {
      letterSpacing: ["hover", "focus"],
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
