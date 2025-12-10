import { getNoticiaPorSlug } from "@/lib/noticiasApi";

interface NoticiaDetallePageProps {
  params: { slug: string };
}

export default async function NoticiaDetallePage({
  params,
}: NoticiaDetallePageProps) {
  const noticia = await getNoticiaPorSlug(params.slug);

  if (!noticia) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">Noticia no encontrada</h1>
        <p className="text-sm text-gray-600">
          La noticia que estás buscando no existe o fue movida.
        </p>
      </div>
    );
  }

  return (
    <article className="space-y-3">
      <p className="text-xs text-gray-500">
        {noticia.fecha} · {noticia.categoria}
      </p>

      <h1 className="text-2xl font-bold">{noticia.titulo}</h1>

      <p className="text-sm text-gray-600">{noticia.resumen}</p>

      <p className="text-sm text-gray-700">
        Aquí podrás mostrar el contenido completo proveniente del backend, junto
        a imágenes, archivos adjuntos y enlaces.
      </p>
    </article>
  );
}
