// app/noticias/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getNoticiaPorSlug } from "@/lib/noticiasApi";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

function normSlug(s: string) {
  return decodeURIComponent(s).trim().toLowerCase();
}

export default async function NoticiaDetallePage(props: PageProps) {
  const { slug } = await props.params; // <-- CLAVE (igual que publicaciones)
  const noticia = await getNoticiaPorSlug(slug);

  if (!noticia) {
    return (
      <section className="cer-section space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">
          Noticia no encontrada
        </h1>
        <p className="text-sm text-gray-700">
          No existe noticia para el slug:{" "}
          <span className="font-mono">{normSlug(slug)}</span>
        </p>
        <Link
          href="/noticias"
          className="text-sm font-semibold text-cer-blue hover:underline"
        >
          ← Volver a noticias
        </Link>
      </section>
    );
  }

  return (
    <article className="space-y-6">
      <Link
        href="/noticias"
        className="text-sm font-semibold text-white/90 hover:underline"
      >
        ← Volver a noticias
      </Link>

      <section className="cer-card">
        <p className="text-xs text-black">
          {noticia.fecha} · {noticia.categoria}
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-black">
          {noticia.titulo}
        </h1>

        <p className="mt-2 text-sm text-black">{noticia.resumen}</p>

        {/* Cover opcional */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/15">
          <div className="relative h-48 w-full">
            {noticia.cover ? (
              <Image
                src={noticia.cover}
                alt={`Imagen de ${noticia.titulo}`}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-r from-cer-dark via-emerald-700 to-cer-blue" />
            )}
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>

        {/* Contenido */}
        {noticia.contenido ? (
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5">
            <h2 className="text-sm font-semibold text-black mb-3">Contenido</h2>
            <div className="space-y-3 text-sm leading-relaxed text-black">
              {noticia.contenido
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
            <p className="text-sm text-black">
              Aún no se ha publicado el contenido completo.
            </p>
          </div>
        )}

        {/* PDF opcional */}
        {noticia.pdfUrl && (
          <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
            <p className="text-sm text-black">
              Documento disponible en PDF.
            </p>
            <a
              href={noticia.pdfUrl}
              download
              className="inline-flex items-center rounded-lg bg-cer-green px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition"
            >
              Descargar PDF
            </a>
          </div>
        )}
      </section>
    </article>
  );
}
