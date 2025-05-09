const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all your source files
    "./node_modules/flowbite/**/*.js", // Include Flowbite components
    "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}", // Include HeroUI components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite plugin
  ],
};