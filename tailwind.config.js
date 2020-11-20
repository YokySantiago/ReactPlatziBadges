module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        platzi: {
          black: "#1b1b25",
          gray: "#f4f4f7",
          green: "#98ca3f",
          blue: "#1C3643",
        },
      },
      fontFamily: {
        lato: ["Lato", "system-ui"],
        anton: ["Anton", "system-ui"],
      },
      outline: {
        blue: "2px solid #1C3643",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
