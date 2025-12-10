import Link from "next/link";
import { getEventos } from "@/lib/eventosApi";

export default async function EventosPage() {
  const eventos = await getEventos();

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Eventos</h1>
      <p className="text-sm text-gray-600">
        Seminarios, talleres, cursos y otras actividades organizadas por el
        Centro de Energías Renovables.
      </p>

      <div className="space-y-3">
        {eventos.map((e) => (
          <Link
            key={e.slug}
            href={`/eventos/${e.slug}`}
            className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm hover:border-emerald-500 transition"
          >
            <p className="text-xs text-gray-500">
              {e.fecha} · {e.modalidad} · {e.lugar}
            </p>
            <p className="font-semibold">{e.titulo}</p>
            <p className="mt-1 text-xs text-gray-600">{e.resumen}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
