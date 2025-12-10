import { getEventoPorSlug } from "@/lib/eventosApi";

interface EventoDetallePageProps {
  params: { slug: string };
}

// Página de detalle de un evento
export default async function EventoDetallePage({
  params,
}: EventoDetallePageProps) {
  const evento = await getEventoPorSlug(params.slug);

  if (!evento) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">Evento no encontrado</h1>
        <p className="text-sm text-gray-600">
          El evento que estás buscando no existe o fue movido.
        </p>
      </div>
    );
  }

  return (
    <article className="space-y-3">
      <p className="text-xs text-gray-500">
        {evento.fecha} · {evento.modalidad} · {evento.lugar}
      </p>

      <h1 className="text-2xl font-bold">{evento.titulo}</h1>

      <p className="text-sm text-gray-600">{evento.resumen}</p>

      <p className="text-sm text-gray-700">
        Aquí podrás mostrar más detalles del evento: programa, ponentes,
        formulario de inscripción, enlaces a materiales y grabaciones. Eso
        vendrá del backend cuando conectemos el CMS.
      </p>
    </article>
  );
}
