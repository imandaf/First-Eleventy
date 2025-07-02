module.exports = {
  content: ["./src/**/*.{njk,html,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: 'class',
};