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
          green: "#22c55e", // primario
          dark: "#064e3b", // texto/hero oscuros
          light: "#bbf7d0", // fondos suaves/bordes
          blue: "#0ea5e9", // secundario (links, acentos)
          // gris institucional (equivalente aprox. a gray-100)
          gray: "#f3f4f6",
        },
        // Alias semánticos (opcional pero útil)
        brand: {
          primary: "#22c55e",
          primaryDark: "#064e3b",
          secondary: "#0ea5e9",
        },
      },
      boxShadow: {
        cerCard: "0 10px 30px rgba(15, 23, 42, 0.18)", // sombra suave institucional
      },
      borderRadius: {
        cer: "1.5rem", // 24px, para tarjetas y hero
      },
      maxWidth: {
        content: "72rem", // ~1152px: ancho para contenido principal
      },
    },
  },
  plugins: [],
};

export default config;
