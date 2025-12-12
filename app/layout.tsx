import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Centro de Energías Renovables",
  description:
    "Portal institucional del Centro de Energías Renovables: noticias, publicaciones, proyectos y eventos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Enlace para lectores de pantalla / teclado */}
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>

        <Header />

        <main id="contenido-principal" className="flex-1 cer-container">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
