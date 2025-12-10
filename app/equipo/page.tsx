import { equipoMock } from "@/lib/equipoMock";

// Página que muestra al equipo del centro
export default function EquipoPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Equipo</h1>

      <p className="text-sm text-gray-600">
        El Centro de Energías Renovables está conformado por un equipo
        multidisciplinario de profesionales dedicados a la investigación,
        desarrollo tecnológico y formación de capacidades.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {equipoMock.map((m) => (
          <div
            key={m.nombre}
            className="rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm"
          >
            <p className="text-base font-semibold">{m.nombre}</p>
            <p className="text-xs text-emerald-700 font-medium">{m.cargo}</p>
            <p className="mt-1 text-xs text-gray-600">
              Línea de trabajo: {m.linea}
            </p>

            {m.email && (
              <p className="mt-2 text-xs text-gray-500">
                Contacto:{" "}
                <a
                  href={`mailto:${m.email}`}
                  className="text-sky-600 hover:underline"
                >
                  {m.email}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
