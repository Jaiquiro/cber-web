import { getPublicacionPorSlug } from "@/lib/publicacionesApi";

interface PublicacionDetallePageProps {
  params: { slug: string };
}

export default async function PublicacionDetallePage({
  params,
}: PublicacionDetallePageProps) {
  const publicacion = await getPublicacionPorSlug(params.slug);

  if (!publicacion) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">Publicación no encontrada</h1>
        <p className="text-sm text-gray-600">
          La publicación que estás buscando no existe o fue movida.
        </p>
      </div>
    );
  }

  return (
    <article className="space-y-3">
      <p className="text-xs text-gray-500">
        {publicacion.anio} · {publicacion.tipo}
      </p>
      <h1 className="text-2xl font-bold">{publicacion.titulo}</h1>
      <p className="text-sm text-gray-600">{publicacion.resumen}</p>
      <p className="text-sm text-gray-700">
        Aquí podrás mostrar el resumen extendido, autores, revista/congreso, DOI
        y enlaces al PDF cuando el backend esté conectado.
      </p>
    </article>
  );
}
