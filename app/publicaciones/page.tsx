import Link from "next/link";
import { getPublicaciones } from "@/lib/publicacionesApi";

export default async function PublicacionesPage() {
  const publicaciones = await getPublicaciones();

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Publicaciones</h1>
      <p className="text-sm text-gray-600">
        Artículos científicos, informes técnicos y otros resultados del Centro
        de Energías Renovables.
      </p>

      <div className="space-y-3">
        {publicaciones.map((p) => (
          <Link
            key={p.slug}
            href={`/publicaciones/${p.slug}`}
            className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm hover:border-emerald-500 transition"
          >
            <p className="text-xs text-gray-500">
              {p.anio} · {p.tipo}
            </p>
            <p className="font-semibold">{p.titulo}</p>
            <p className="mt-1 text-xs text-gray-600">{p.resumen}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
