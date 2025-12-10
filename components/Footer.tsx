import Link from "next/link";

// Componente del pie de página
export function Footer() {
  return (
    <footer className="mt-10 border-t bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-6 text-xs text-gray-600 md:flex-row">
        {/* Texto de derechos */}
        <p>
          © {new Date().getFullYear()} Centro de Energías Renovables. Todos los
          derechos reservados.
        </p>

        {/* Links rápidos, luego podemos cambiar a redes sociales, etc. */}
        <div className="flex gap-4">
          <Link href="/sobre" className="hover:text-gray-800">
            Sobre el centro
          </Link>
          <Link href="/contacto" className="hover:text-gray-800">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
