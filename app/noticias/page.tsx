import Link from "next/link";
import { getNoticias } from "@/lib/noticiasApi";

const CATEGORIA_BADGE: Record<string, string> = {
  Convocatoria: "bg-emerald-100 text-emerald-800",
  Evento: "bg-sky-100 text-sky-800",
  Comunicado: "bg-slate-100 text-slate-800",
  Publicación: "bg-teal-100 text-teal-800",
  Taller: "bg-indigo-100 text-indigo-800",
};

function badgeForCategoria(categoria?: string) {
  if (!categoria) return "bg-gray-100 text-gray-800";
  return CATEGORIA_BADGE[categoria] ?? "bg-gray-100 text-gray-800";
}

export default async function NoticiasPage() {
  const noticias = await getNoticias();

  return (
    <div className="space-y-8">
      {/* Encabezado con contraste */}
      <section className="relative cer-section overflow-hidden">
        <div className="absolute inset-0 bg-black/30 rounded-2xl pointer-events-none" />
        <div className="relative">
          <h1 className="text-2xl font-semibold text-white">
            Noticias del Centro
          </h1>
          <p className="mt-2 text-sm text-white/85 max-w-2xl">
            Actualizaciones, actividades y comunicados oficiales del Centro de
            Energías Renovables.
          </p>
        </div>
      </section>

      {/* Listado horizontal */}
      <section className="cer-section">
        {noticias.length === 0 ? (
          <p className="text-sm text-gray-600">
            Aún no hay noticias publicadas.
          </p>
        ) : (
          <div className="space-y-3">
            {noticias.map((n) => (
              <Link
                key={n.slug}
                href={`/noticias/${n.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-sm backdrop-blur
                           transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="flex items-stretch gap-4">
                  {/* Banda lateral (visual institucional) */}
                  <div className="w-2 bg-gradient-to-b from-cer-dark via-emerald-600 to-cer-blue" />

                  {/* Contenido */}
                  <div className="flex-1 p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-gray-500">{n.fecha}</span>

                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${badgeForCategoria(
                          n.categoria
                        )}`}
                      >
                        {n.categoria}
                      </span>
                    </div>

                    <h2 className="mt-2 text-base font-semibold text-gray-900 leading-snug">
                      {n.titulo}
                    </h2>

                    <p className="mt-1 text-sm text-gray-700 line-clamp-2">
                      {n.resumen}
                    </p>

                    <div className="mt-3 flex justify-end">
                      <span className="text-[11px] font-semibold text-cer-blue group-hover:underline">
                        Leer más →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
