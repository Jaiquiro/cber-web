import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Metadatos básicos del sitio (título y descripción)
export const metadata: Metadata = {
  title: "Centro de Energías Renovables",
  description:
    "Noticias, proyectos y publicaciones del Centro de Energías Renovables.",
};

// Layout raíz que envuelve a todas las páginas
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* Cabecera fija para todo el sitio */}
        <Header />

        {/* Contenido principal, centrado y con márgenes */}
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        {/* Pie de página */}
        <Footer />
      </body>
    </html>
  );
}
