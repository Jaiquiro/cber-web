// Home del Centro de Energías Renovables

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* HERO PRINCIPAL */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
            Centro de Energías Renovables
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Investigación aplicada para la transición energética en Bolivia
          </h1>

          <p className="text-sm text-gray-600 md:text-base">
            Generamos conocimiento, proyectos y capacidades en energías
            renovables, hidrógeno verde y eficiencia energética para acompañar
            la descarbonización y la seguridad energética del país.
          </p>

          {/* Botones de acción rápida */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/publicaciones"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Ver publicaciones
            </Link>

            <Link
              href="/proyectos"
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-white"
            >
              Proyectos de investigación
            </Link>
          </div>
        </div>

        {/* Caja lateral de noticias destacadas (contenido mock simple) */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 text-sm shadow-sm">
          <h2 className="mb-3 text-base font-semibold">Últimas noticias</h2>

          <div className="space-y-3">
            <div className="border-l-2 border-emerald-500 pl-3">
              <p className="text-xs text-gray-500">
                Convocatoria · 15 enero 2026
              </p>
              <Link
                href="/noticias/programa-hidrogeno-verde-2026"
                className="font-semibold hover:underline"
              >
                Lanzamiento del programa de investigación en hidrógeno verde
                2026
              </Link>
            </div>

            <div className="border-l-2 border-sky-500 pl-3">
              <p className="text-xs text-gray-500">Evento · 3 febrero 2026</p>
              <Link
                href="/eventos/taller-hidrogeno-verde-introductorio"
                className="font-semibold hover:underline"
              >
                Taller introductorio sobre hidrógeno verde
              </Link>
            </div>
          </div>

          <Link
            href="/noticias"
            className="mt-4 inline-block text-xs font-semibold text-sky-600 hover:underline"
          >
            Ver todas las noticias →
          </Link>
        </div>
      </section>

      {/* LÍNEAS DE INVESTIGACIÓN */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Líneas de investigación</h2>
        <p className="text-sm text-gray-600">
          El centro organiza su trabajo en varias líneas estratégicas que
          combinan investigación aplicada, transferencia tecnológica y
          formación de capacidades.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Energía solar fotovoltaica y térmica",
            "Energía eólica y sistemas híbridos",
            "Hidrógeno verde y almacenamiento energético",
            "Eficiencia energética y auditorías",
            "Redes eléctricas inteligentes y microrredes",
            "Modelación energética y políticas públicas",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUES RESUMEN A OTRAS SECCIONES */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Explora el centro</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/sobre"
            className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm hover:border-emerald-500 transition"
          >
            <h3 className="mb-1 text-base font-semibold">Sobre el centro</h3>
            <p className="text-xs text-gray-600">
              Conoce la misión, visión, equipo y contexto institucional del
              centro.
            </p>
          </Link>

          <Link
            href="/publicaciones"
            className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm hover:border-emerald-500 transition"
          >
            <h3 className="mb-1 text-base font-semibold">Publicaciones</h3>
            <p className="text-xs text-gray-600">
              Accede a artículos, informes técnicos y otros resultados de
              investigación.
            </p>
          </Link>

          <Link
            href="/proyectos"
            className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm hover:border-emerald-500 transition"
          >
            <h3 className="mb-1 text-base font-semibold">Proyectos</h3>
            <p className="text-xs text-gray-600">
              Revisa los proyectos en curso y finalizados en energías
              renovables y transición energética.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
