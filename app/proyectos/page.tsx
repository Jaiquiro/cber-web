"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

/* ===============================
   Líneas de investigación
================================ */
const LINEAS = [
  { id: "solar", nombre: "Recurso solar fotovoltaico y térmico" },
  { id: "eolica", nombre: "Energía eólica y sistemas híbridos" },
  { id: "hidrogeno", nombre: "Hidrógeno verde y vectores energéticos" },
  { id: "eficiencia", nombre: "Eficiencia energética y auditorías" },
  {
    id: "microrredes",
    nombre: "Microrredes, redes inteligentes y almacenamiento",
  },
  { id: "politicas", nombre: "Modelación energética y políticas públicas" },
];

/* ===============================
   Gradientes por línea
================================ */
const LINEA_GRADIENT: Record<string, string> = {
  solar: "from-amber-500 via-emerald-600 to-cer-blue",
  eolica: "from-sky-600 via-cer-blue to-cer-dark",
  hidrogeno: "from-emerald-600 via-teal-600 to-cer-blue",
  eficiencia: "from-lime-600 via-emerald-700 to-cer-dark",
  microrredes: "from-indigo-600 via-sky-600 to-cer-blue",
  politicas: "from-slate-700 via-cer-dark to-cer-blue",
};

/* ===============================
   Mock de proyectos
================================ */
const PROYECTOS = [
  {
    id: "atlas-solar-2026",
    titulo: "Atlas solar y eólico de Bolivia 2026",
    lineaId: "solar",
    estado: "En ejecución",
    resumen:
      "Proyecto de mapeo del recurso solar y eólico para planificación de largo plazo.",
  },
  {
    id: "piloto-h2-altiplano",
    titulo: "Planta piloto de hidrógeno verde en el altiplano",
    lineaId: "hidrogeno",
    estado: "En formulación",
    resumen:
      "Evaluación de viabilidad técnica y económica de producción de H2V a partir de energía solar.",
  },
  {
    id: "auditorias-industria",
    titulo: "Programa de auditorías energéticas en industria",
    lineaId: "eficiencia",
    estado: "En ejecución",
    resumen:
      "Auditorías energéticas en empresas industriales para identificar medidas de ahorro.",
  },
];

/* ===============================
   Página
================================ */
export default function ProyectosPage() {
  const searchParams = useSearchParams();
  const lineaSeleccionada = searchParams.get("linea");

  const proyectosFiltrados =
    lineaSeleccionada && LINEAS.some((l) => l.id === lineaSeleccionada)
      ? PROYECTOS.filter((p) => p.lineaId === lineaSeleccionada)
      : PROYECTOS;

  const lineaActiva = LINEAS.find((l) => l.id === lineaSeleccionada) ?? null;

  return (
    <div className="space-y-8">
      {/* ================= Encabezado ================= */}
      <section className="cer-section">
        <h1 className="text-2xl font-semibold text-gray-1000">
          Proyectos de investigación
        </h1>

        {/* ===== Filtros ===== */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/proyectos"
            className={`rounded-full px-3 py-1 text-xs font-semibold border transition-colors ${
              !lineaSeleccionada
                ? "bg-cer-green text-white border-cer-green"
                : "bg-white text-gray-700 border-gray-300 hover:border-cer-green"
            }`}
          >
            Todas las líneas
          </Link>

          {LINEAS.map((linea) => {
            const activa = linea.id === lineaSeleccionada;
            return (
              <Link
                key={linea.id}
                href={`/proyectos?linea=${linea.id}`}
                className={`rounded-full px-3 py-1 text-xs font-semibold border transition-colors ${
                  activa
                    ? "bg-cer-green text-white border-cer-green"
                    : "bg-white text-gray-700 border-gray-300 hover:border-cer-green"
                }`}
              >
                {linea.nombre}
              </Link>
            );
          })}
        </div>

        {lineaActiva && (
          <p className="mt-3 text-xs text-gray-500">
            Mostrando proyectos en la línea:{" "}
            <span className="font-semibold">{lineaActiva.nombre}</span>.
          </p>
        )}
      </section>

      {/* ================= Grid de proyectos ================= */}
      <section className="cer-section">
        {proyectosFiltrados.length === 0 ? (
          <p className="text-sm text-gray-600">
            No hay proyectos registrados aún en esta línea.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proyectosFiltrados.map((proyecto) => {
              const linea = LINEAS.find((l) => l.id === proyecto.lineaId);
              const gradient =
                LINEA_GRADIENT[proyecto.lineaId] ??
                "from-cer-dark via-emerald-700 to-cer-blue";

              return (
                <Link
                  key={proyecto.id}
                  href={`/proyectos/${proyecto.id}`}
                  className="group block overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-sm backdrop-blur
                             transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Header visual */}
                  <div className={`h-32 bg-gradient-to-br ${gradient}`} />

                  {/* Contenido */}
                  <div className="p-4 space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-cer-dark">
                      {linea?.nombre ?? "Línea no especificada"}
                    </p>

                    <h2 className="text-base font-semibold text-gray-900 leading-snug">
                      {proyecto.titulo}
                    </h2>

                    <p className="text-xs text-gray-500">
                      Estado:{" "}
                      <span className="font-semibold text-gray-800">
                        {proyecto.estado}
                      </span>
                    </p>

                    <p className="text-sm text-gray-700 line-clamp-3">
                      {proyecto.resumen}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        {proyecto.estado}
                      </span>

                      <span className="text-[11px] font-semibold text-cer-blue group-hover:underline">
                        Ver proyecto →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
