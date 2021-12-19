const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./www/site/**/*.php", "./src/js/**/*.js"],
  safelist: [],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
