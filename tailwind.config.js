module.exports = {
  purge: ["./index.html", "./src/**/*.vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blood: "#8a0303",
      },
      fontFamily: {
        pirata: ["Pirata One", "Roboto"],
        lato: ["Lato", "Roboto"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
