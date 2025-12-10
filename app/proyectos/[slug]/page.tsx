import { getProyectoPorSlug } from "@/lib/proyectosApi";

interface ProyectoDetallePageProps {
  params: { slug: string };
}

export default async function ProyectoDetallePage({
  params,
}: ProyectoDetallePageProps) {
  const proyecto = await getProyectoPorSlug(params.slug);

  if (!proyecto) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">Proyecto no encontrado</h1>
        <p className="text-sm text-gray-600">
          El proyecto que estás buscando no existe o fue movido.
        </p>
      </div>
    );
  }

  return (
    <article className="space-y-3">
      <p className="text-xs text-gray-500">
        {proyecto.periodo} · {proyecto.estado}
      </p>
      <h1 className="text-2xl font-bold">{proyecto.nombre}</h1>
      <p className="text-sm text-gray-600">{proyecto.resumen}</p>
      <p className="text-sm text-gray-700">
        Aquí podrás detallar objetivos, metodología, resultados esperados,
        socios y financiamiento del proyecto cuando el backend esté conectado.
      </p>
    </article>
  );
}
