/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        mover: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(20px)" },
        },
        ImageMover: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(20px)" },
        },
      },
      animation: {
        mover: "mover 1.5s infinite alternate",
        moverfast: "mover 1.8s infinite alternate ",
        moverfastfast: "mover 2s infinite alternate",
        imageMover: "mover 0.5s",
      },
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E90", // 240,86,199
        secondary: "#58E6D9", // 80,230,217
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
