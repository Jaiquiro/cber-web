import Link from "next/link";
import { getProyectos } from "@/lib/proyectosApi";

export default async function ProyectosPage() {
  const proyectos = await getProyectos();

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Proyectos de investigación</h1>
      <p className="text-sm text-gray-600">
        Proyectos desarrollados por el Centro de Energías Renovables en
        coordinación con aliados nacionales e internacionales.
      </p>

      <div className="space-y-3">
        {proyectos.map((p) => (
          <Link
            key={p.slug}
            href={`/proyectos/${p.slug}`}
            className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm hover:border-emerald-500 transition"
          >
            <p className="text-xs text-gray-500">
              {p.periodo} · {p.estado}
            </p>
            <p className="font-semibold">{p.nombre}</p>
            <p className="mt-1 text-xs text-gray-600">{p.resumen}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
