/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Roboto", "sans - serif"],
      },
      backgroundEffect: {
        glass: "rgba(0, 0, 0, 0.2)", // Adjust opacity as needed
      },
      colors: {
        primaryColor: "#212428",
        lightText: "#878e99",
        designColor: "#ff014f",
        titleColor: "#c4cfde",
      },

      backgroundImage: {
        "hero-image": "url('./src/assets/portfolioImages/banner.png')",
      },
    },
  },
  plugins: [],
};
