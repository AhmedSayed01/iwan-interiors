/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clampHeader: "clamp(3rem, 6vw, 4.5rem)",
        clampHeader2: "clamp(3rem, 6vw, 4rem)"
      },
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        DM: ["DM Sans", "sans-serif"]
      },
      colors: {
        main: "#026666",
      },
      width: {
        clampW: "clamp(200px, 80%, 350px)",
      },
    },
  },
  plugins: [],
}
