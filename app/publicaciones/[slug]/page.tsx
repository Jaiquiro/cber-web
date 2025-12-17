// app/publicaciones/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getPublicacionPorSlug } from "@/lib/publicacionesApi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Params = { slug: string };

interface PublicacionDetallePageProps {
  params: Promise<Params>; // 👈 en Next 16 puede venir como Promise
}

const TIPO_BADGE = {
  cientifico: "bg-emerald-100 text-emerald-900 border-emerald-200",
  editorial: "bg-slate-100 text-slate-900 border-slate-200",
  opinion: "bg-sky-100 text-sky-900 border-sky-200",
} as const;

type Tipo = keyof typeof TIPO_BADGE;

function normalizeTipo(tipo?: string): Tipo | null {
  if (!tipo) return null;
  const t = tipo.toLowerCase().trim();
  if (t === "cientifico" || t === "editorial" || t === "opinion") return t;
  return null;
}

function badgeForTipo(tipo?: string) {
  const t = normalizeTipo(tipo);
  if (!t) return "bg-gray-100 text-gray-900 border-gray-200";
  return TIPO_BADGE[t];
}

function labelTipo(tipo?: string) {
  const t = normalizeTipo(tipo);
  if (!t) return "Publicación";
  if (t === "cientifico") return "Científico";
  if (t === "editorial") return "Editorial";
  return "Opinión";
}

export default async function PublicacionDetallePage({
  params,
}: PublicacionDetallePageProps) {
  const { slug } = await params; // ✅ clave
  console.log("▶️ SLUG:", slug);

  const publicacion = await getPublicacionPorSlug(slug);

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

  const tipoNorm = normalizeTipo(publicacion.tipo);
  const esCientifico = tipoNorm === "cientifico";

  return (
    <div className="space-y-6">
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

      {esCientifico ? (
        <section className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <div className="cer-card overflow-hidden p-0 self-start">
            <div className="relative h-[360px] w-full">
              {publicacion.cover ? (
                <Image
                  src={publicacion.cover}
                  alt={`Carátula de ${publicacion.titulo}`}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-cer-dark via-emerald-600 to-cer-blue" />
              )}
            </div>
          </div>

          <article className="cer-card">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-500">{publicacion.anio}</span>
              <span className="text-xs text-gray-400">·</span>
              <span className="text-xs text-gray-600">
                {publicacion.categoria ?? "Publicación científica"}
              </span>
            </div>

            <h1 className="mt-3 text-2xl font-semibold text-gray-900 leading-tight">
              {publicacion.titulo}
            </h1>
            <p className="mt-3 text-sm text-gray-700">{publicacion.resumen}</p>

            {publicacion.contenido ? (
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <h2 className="text-sm font-semibold text-black mb-3">
                  Contenido
                </h2>
                <div className="space-y-3 text-sm leading-relaxed text-black/85">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {publicacion.contenido}
                  </ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm text-white/80">
                  Aún no se ha publicado el contenido completo.
                </p>
              </div>
            )}

            {publicacion.pdfUrl && (
              <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="text-sm text-white/80">
                  Documento disponible en PDF.
                </p>
                <a
                  href={publicacion.pdfUrl}
                  download
                  className="inline-flex items-center rounded-lg bg-cer-green px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition"
                >
                  Descargar PDF
                </a>
              </div>
            )}
          </article>
        </section>
      ) : (
        <section className="cer-card">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/80">{publicacion.anio}</span>
            <span className="text-xs text-white/70">·</span>
            <span className="text-xs text-white/80">
              {publicacion.categoria ?? "Publicación"}
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-semibold text-white leading-tight">
            {publicacion.titulo}
          </h1>

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

            {publicacion.contenido ? (
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <h2 className="text-sm font-semibold text-white mb-3">
                  Contenido
                </h2>
                <div className="space-y-3 text-sm leading-relaxed text-white/85">
                  {publicacion.contenido
                    .trim()
                    .split("\n")
                    .filter(Boolean)
                    .map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm text-white/80">
                  Aún no se ha publicado el contenido completo.
                </p>
              </div>
            )}

            {publicacion.pdfUrl && (
              <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="text-sm text-white/80">
                  Documento disponible en PDF.
                </p>
                <a
                  href={publicacion.pdfUrl}
                  download
                  className="inline-flex items-center rounded-lg bg-cer-green px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition"
                >
                  Descargar PDF
                </a>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
