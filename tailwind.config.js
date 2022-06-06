module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};
