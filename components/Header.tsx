"use client"; // Indicamos que este componente se renderiza del lado del cliente

import Link from "next/link";
import { usePathname } from "next/navigation";

// Componente principal de la cabecera
export function Header() {
  // Hook de Next para saber en qué ruta estamos y poder resaltar el menú activo
  const pathname = usePathname();

  // Definimos los ítems del menú principal
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/sobre", label: "Sobre el centro" },
    { href: "/noticias", label: "Noticias" },
    { href: "/publicaciones", label: "Publicaciones" },
    { href: "/proyectos", label: "Proyectos" },
    //{ href: "/eventos", label: "Eventos" },
    //{ href: "/equipo", label: "Equipo" },
  ];

  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo + nombre del centro */}
        <Link href="/" className="flex items-center gap-2">
          {/* Círculo de color que hace de logo simple por ahora */}
          <div className="h-8 w-8 rounded-full bg-emerald-500" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-emerald-700">
              Centro Boliviano de Energías Renovables
            </span>
            <span className="text-xs text-gray-500">
              Investigación · Innovación · Transición energética
            </span>
          </div>
        </Link>

        {/* Navegación principal (oculta en pantallas pequeñas por ahora) */}
        <nav className="hidden gap-4 text-sm md:flex">
          {navItems.map((item) => {
            // Verificamos si este link es la ruta actual para resaltar el botón
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 transition ${
                  active
                    ? "bg-emerald-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        {/* Futuro menú móvil */}
        <div className="md:hidden text-gray-600 text-xl">☰</div>
      </div>
    </header>
  );
}
