"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

// Definimos las líneas una sola vez
const LINEAS = [
  {
    id: "solar",
    nombre: "Recurso solar fotovoltaico y térmico",
  },
  {
    id: "eolica",
    nombre: "Energía eólica y sistemas híbridos",
  },
  {
    id: "hidrogeno",
    nombre: "Hidrógeno verde y vectores energéticos",
  },
  {
    id: "eficiencia",
    nombre: "Eficiencia energética y auditorías",
  },
  {
    id: "microrredes",
    nombre: "Microrredes, redes inteligentes y almacenamiento",
  },
  {
    id: "politicas",
    nombre: "Modelación energética y políticas públicas",
  },
];

// Mock de proyectos (aquí luego metes los reales)
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
  // …añade tus proyectos reales aquí
];

export default function ProyectosPage() {
  const searchParams = useSearchParams();
  const lineaSeleccionada = searchParams.get("linea"); // puede ser null

  const proyectosFiltrados =
    lineaSeleccionada && LINEAS.some((l) => l.id === lineaSeleccionada)
      ? PROYECTOS.filter((p) => p.lineaId === lineaSeleccionada)
      : PROYECTOS;

  const lineaActiva = LINEAS.find((l) => l.id === lineaSeleccionada) ?? null;

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <section className="cer-section">
        <h1 className="text-2xl font-semibold text-gray-900">
          Proyectos de investigación
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Esta sección reúne los proyectos en los que trabaja el centro,
          organizados según las líneas de investigación.
        </p>

        {/* Filtros por línea */}
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

        {/* Texto breve de la línea activa (si hay filtro) */}
        {lineaActiva && (
          <p className="mt-3 text-xs text-gray-500">
            Mostrando proyectos en la línea:{" "}
            <span className="font-semibold">{lineaActiva.nombre}</span>.
          </p>
        )}
      </section>

      {/* Listado de proyectos */}
      <section className="cer-section">
        {proyectosFiltrados.length === 0 ? (
          <p className="text-sm text-gray-600">
            No hay proyectos registrados aún en esta línea. Puedes registrar
            nuevos proyectos o seleccionar otra línea.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {proyectosFiltrados.map((proyecto) => {
              const linea = LINEAS.find((l) => l.id === proyecto.lineaId);
              return (
                <article key={proyecto.id} className="cer-card">
                  <p className="text-[11px] uppercase tracking-widest text-cer-dark mb-1">
                    {linea?.nombre ?? "Línea no especificada"}
                  </p>
                  <h2 className="text-base font-semibold text-gray-900">
                    {proyecto.titulo}
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Estado:{" "}
                    <span className="font-medium text-gray-800">
                      {proyecto.estado}
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    {proyecto.resumen}
                  </p>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
