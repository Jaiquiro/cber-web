import Link from "next/link";
import Image from "next/image";
import { getPublicacionPorSlug } from "@/lib/publicacionesApi";

interface PublicacionDetallePageProps {
  params: { slug: string };
}

const TIPO_BADGE: Record<string, string> = {
  cientifico: "bg-emerald-100 text-emerald-900 border-emerald-200",
  editorial: "bg-slate-100 text-slate-900 border-slate-200",
  opinion: "bg-sky-100 text-sky-900 border-sky-200",
};

function badgeForTipo(tipo?: string) {
  if (!tipo) return "bg-gray-100 text-gray-900 border-gray-200";
  return TIPO_BADGE[tipo] ?? "bg-gray-100 text-gray-900 border-gray-200";
}

function labelTipo(tipo?: string) {
  if (!tipo) return "Publicación";
  if (tipo === "cientifico") return "Científico";
  if (tipo === "editorial") return "Editorial";
  if (tipo === "opinion") return "Opinión";
  return tipo;
}

export default async function PublicacionDetallePage({
  params,
}: PublicacionDetallePageProps) {
  const publicacion = await getPublicacionPorSlug(params.slug);

  if (!publicacion) {
    return (
      <section className="cer-section space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">
          Publicación no encontrada
        </h1>
        <p className="text-sm text-gray-700">
          La publicación que estás buscando no existe o fue movida.
        </p>
        <div className="pt-2">
          <Link
            href="/publicaciones"
            className="text-sm font-semibold text-cer-blue hover:underline"
          >
            ← Volver a publicaciones
          </Link>
        </div>
      </section>
    );
  }

  const esCientifico = publicacion.tipo === "cientifico";

  return (
    <div className="space-y-6">
      {/* Navegación */}
      <div className="flex items-center justify-between">
        <Link
          href="/publicaciones"
          className="text-sm font-semibold text-white/90 hover:underline"
        >
          ← Volver a publicaciones
        </Link>

        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${badgeForTipo(
            publicacion.tipo
          )}`}
        >
          {labelTipo(publicacion.tipo)}
        </span>
      </div>

      {/* Layout científico: carátula + ficha */}
      {esCientifico ? (
        <section className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Carátula */}
          <div className="cer-card overflow-hidden p-0">
            <div className="relative aspect-[3/4] w-full">
              {publicacion.cover ? (
                <Image
                  src={publicacion.cover}
                  alt={`Carátula de ${publicacion.titulo}`}
                  fill
                  sizes="260px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-cer-dark via-emerald-600 to-cer-blue" />
              )}
            </div>
          </div>

          {/* Contenido */}
          <article className="cer-card">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-white/80">{publicacion.anio}</span>

              <span className="text-xs text-white/70">·</span>

              <span className="text-xs text-white/80">
                {publicacion.categoria ?? "Publicación científica"}
              </span>
            </div>

            <h1 className="mt-3 text-2xl font-semibold text-white leading-tight">
              {publicacion.titulo}
            </h1>

            <p className="mt-3 text-sm text-white/85">{publicacion.resumen}</p>

            {/* Placeholder institucional (listo para backend) */}
            <div className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Próximamente
              </p>
              <p className="mt-2 text-sm text-white/80">
                Aquí podrás mostrar autores, afiliación, revista/congreso, DOI,
                palabras clave y enlaces al PDF cuando el backend esté
                conectado.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                  Autores
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                  DOI
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                  PDF
                </span>
              </div>
            </div>
          </article>
        </section>
      ) : (
        /* Layout editorial/opinión: lectura tipo artículo */
        <section className="cer-card">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/80">{publicacion.anio}</span>
            <span className="text-xs text-white/70">·</span>
            <span className="text-xs text-white/80">
              {publicacion.categoria ??
                (publicacion.tipo === "editorial"
                  ? "Editorial"
                  : "Artículo de opinión")}
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-semibold text-white leading-tight">
            {publicacion.titulo}
          </h1>

          {/* Banda / carátula opcional arriba */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/15">
            <div className="relative h-40 w-full">
              {publicacion.cover ? (
                <Image
                  src={publicacion.cover}
                  alt={`Imagen de ${publicacion.titulo}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-r from-cer-dark via-emerald-700 to-cer-blue" />
              )}
              <div className="absolute inset-0 bg-black/25" />
            </div>
          </div>

          <div className="mt-5 max-w-3xl">
            <p className="text-base leading-relaxed text-white/85">
              {publicacion.resumen}
            </p>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm text-white/80">
                Aquí irá el contenido completo del editorial/opinión cuando lo
                conectemos al backend o CMS (bloques, markdown o rich text).
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
