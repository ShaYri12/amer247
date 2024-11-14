import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        saira: ["Saira", " sans-serif"],
      },
      colors: {
        // Example custom colors
        primary: "#FF512F",
        grey1: "#4D4D4D",
        grey2: "#D6D6D6",
        background: "#F9F9F9",
        background2: "#FF512F4D",
        cardBackground: "#CA5A24",
      },
      fontSize: {
        md: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
