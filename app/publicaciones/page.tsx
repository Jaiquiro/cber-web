import Link from "next/link";
import Image from "next/image";
import { getPublicaciones } from "@/lib/publicacionesApi";

type SearchParams = {
  tipo?: string;
};

const FILTROS = [
  { id: "todo", label: "Todo" },
  { id: "cientifico", label: "Científico" },
  { id: "editorial", label: "Editorial" },
  { id: "opinion", label: "Opinión" },
];

const TIPO_BADGE: Record<string, string> = {
  cientifico: "bg-emerald-100 text-emerald-800",
  editorial: "bg-slate-100 text-slate-800",
  opinion: "bg-sky-100 text-sky-800",
};

function badgeForTipo(tipo?: string) {
  if (!tipo) return "bg-gray-100 text-gray-800";
  const key = tipo.toLowerCase();
  return TIPO_BADGE[key] ?? "bg-gray-100 text-gray-800";
}

function labelTipo(tipo?: string) {
  if (!tipo) return "Publicación";
  const key = tipo.toLowerCase();
  if (key === "cientifico") return "Científico";
  if (key === "editorial") return "Editorial";
  if (key === "opinion") return "Opinión";
  return tipo;
}

export default async function PublicacionesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const publicaciones = await getPublicaciones();

  const filtro = (searchParams.tipo ?? "todo").toLowerCase();

  const filtradas =
    filtro === "todo"
      ? publicaciones
      : publicaciones.filter(
          (p: any) => (p.tipo ?? "").toLowerCase() === filtro
        );

  return (
    <div className="space-y-8">
      {/* Encabezado con contraste (mismo patrón CER) */}
      <section className="relative cer-section overflow-hidden">
        <div className="absolute inset-0 bg-black/30 rounded-2xl pointer-events-none" />
        <div className="relative">
          <h1 className="text-2xl font-semibold text-white">Publicaciones</h1>

          {/* Filtros */}
          <div className="mt-4 flex flex-wrap gap-2">
            {FILTROS.map((f) => {
              const activo = f.id === filtro;
              const href =
                f.id === "todo"
                  ? "/publicaciones"
                  : `/publicaciones?tipo=${f.id}`;

              return (
                <Link
                  key={f.id}
                  href={href}
                  className={`rounded-full px-3 py-1 text-xs font-semibold border transition-colors ${
                    activo
                      ? "bg-cer-green text-white border-cer-green"
                      : "bg-white text-gray-700 border-gray-300 hover:border-cer-green"
                  }`}
                >
                  {f.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Listado horizontal */}
      <section className="cer-section">
        {filtradas.length === 0 ? (
          <p className="text-sm text-gray-600">
            No hay publicaciones registradas para este filtro.
          </p>
        ) : (
          <div className="space-y-3">
            {filtradas.map((p: any) => (
              <Link
                key={p.slug}
                href={`/publicaciones/${p.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-sm backdrop-blur
                           transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="flex items-stretch gap-4">
                  {/* Carátula */}
                  <div className="relative w-28 shrink-0 overflow-hidden rounded-l-2xl bg-slate-200">
                    {p.cover ? (
                      <Image
                        src={p.cover}
                        alt={`Carátula de ${p.titulo}`}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-b from-cer-dark via-emerald-600 to-cer-blue" />
                    )}
                  </div>

                  <div className="flex-1 p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-gray-500">{p.anio}</span>

                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${badgeForTipo(
                          p.tipo
                        )}`}
                      >
                        {labelTipo(p.tipo)}
                      </span>
                    </div>

                    <h2 className="mt-2 text-base font-semibold text-gray-900 leading-snug">
                      {p.titulo}
                    </h2>

                    <p className="mt-1 text-sm text-gray-700 line-clamp-2">
                      {p.resumen}
                    </p>

                    <div className="mt-3 flex justify-end">
                      <span className="text-[11px] font-semibold text-cer-blue group-hover:underline">
                        Ver detalle →
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
