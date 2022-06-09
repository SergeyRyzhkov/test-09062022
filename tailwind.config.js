const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  plugins: [require("@tailwindcss/line-clamp")],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1080px",
      "2xl": "1240px",
    },

    fontSize: {
      12: ["12px", "14px"],
      14: ["14px", "18px"],
      16: ["16px", "22px"],
      18: ["18px", "26px"],
    },

    lineHeight: {
      10: "10px",
      14: "14px",
      20: "20px",
      24: "24px",
      30: "30px",
      48: "48px",
      110: "110px",
      120: "120px",
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      gray: {
        100: "#F6F7FB",
        400: "#CDCFD4",
        500: "#B0B0B0",
        600: "#A7A7AB",
        900: "#282828",
      },
      blue: {
        500: "#4491E5",
        600: "#3E86D4",
      },
      white: colors.white,
      yellow: colors.yellow,
      red: colors.red,
      primary: "var(--primary)",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
  },
};
