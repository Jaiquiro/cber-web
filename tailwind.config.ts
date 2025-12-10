import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        cer: {
          green: "#22c55e",
          dark: "#064e3b",
          light: "#bbf7d0",
          blue: "#0ea5e9",
        },
      },
    },
  },
  plugins: [],
};

export default config;
