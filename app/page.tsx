import Link from "next/link";
import Image from "next/image";

const BLOQUES_EXPLORA = [
  {
    href: "/sobre",
    titulo: "Sobre el centro",
    descripcion:
      "Misión, visión, contexto institucional y alianzas estratégicas.",
  },
  {
    href: "/publicaciones",
    titulo: "Publicaciones",
    descripcion:
      "Artículos científicos, informes técnicos y otros resultados de investigación.",
  },
  {
    href: "/proyectos",
    titulo: "Proyectos",
    descripcion:
      "Proyectos en curso y finalizados relacionados con la transición energética.",
  },
  {
    href: "/equipo",
    titulo: "Equipo",
    descripcion:
      "Conoce al equipo de investigación y apoyo técnico del centro.",
  },
];
const LINEAS_INVESTIGACION = [
  {
    id: "solar",
    titulo: "Recurso solar fotovoltaico y térmico",
    descripcion:
      "Tecnologías solares, modelación del recurso y aplicaciones térmicas y eléctricas.",
    imagen: "/images/so.jpg",
  },
  {
    id: "eolica",
    titulo: "Energía eólica y sistemas híbridos",
    descripcion:
      "Integración eólica, híbridos FV–eólico, simulación y operación de sistemas aislados.",
    imagen: "/images/wi.jpg",
  },
  {
    id: "hidrogeno",
    titulo: "Hidrógeno verde y vectores energéticos",
    descripcion:
      "Producción, almacenamiento y aplicaciones industriales del hidrógeno verde.",
    imagen: "/images/h2.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* HERO PRINCIPAL */}
      <section className="relative overflow-hidden rounded-[2rem] border border-cer-light shadow-xl">
        {/* Imagen de fondo */}
        <Image
          src="/images/sd.jpg"
          alt="Paisaje de energías renovables en Bolivia"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        {/* Capa de degradado CER encima de la imagen */}
        <div className="absolute inset-0 bg-gradient-to-r from-cer-dark via-cer-green/60 to-cer-blue" />

        {/* Contenido del hero */}
        <div className="relative px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Columna izquierda */}
            <div className="space-y-4">
              <p className="cer-section-subtitle">
                Centro de Energías Renovables
              </p>

              <h1 className="text-3xl font-bold text-white md:text-4xl">
                Investigación aplicada para la transición energética en Bolivia
              </h1>

              <p className="text-sm text-gray-100 md:text-base">
                El centro impulsa proyectos de investigación, formación y
                transferencia tecnológica en energías renovables, hidrógeno
                verde y eficiencia energética, articulando academia, sector
                público y sector productivo.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/publicaciones" className="btn-primary">
                  Ver publicaciones
                </Link>

                <Link href="/proyectos" className="btn-secondary">
                  Proyectos de investigación
                </Link>
              </div>
            </div>

            {/* Columna derecha: noticias */}
            <div className="space-y-4 text-sm text-white">
              <h2 className="text-base font-semibold">Últimas novedades</h2>

              <div className="space-y-3">
                <Link
                  href="/noticias/programa-hidrogeno-verde-2026"
                  className="block cer-card-dark"
                >
                  <p className="text-xs text-gray-300">
                    Convocatoria · 15 enero 2026
                  </p>
                  <p className="font-semibold text-white">
                    Lanzamiento del programa de investigación en hidrógeno verde
                    2026
                  </p>
                  <p className="mt-1 text-xs text-gray-200">
                    Iniciativa orientada a proyectos de I+D en producción,
                    almacenamiento y uso de hidrógeno verde.
                  </p>
                </Link>

                <Link
                  href="/eventos/taller-hidrogeno-verde-introductorio"
                  className="block cer-card-dark"
                >
                  <p className="text-xs text-gray-300">
                    Evento · 3 febrero 2026 · Virtual
                  </p>
                  <p className="font-semibold text-white">
                    Taller introductorio sobre hidrógeno verde
                  </p>
                  <p className="mt-1 text-xs text-gray-200">
                    Sesión de formación para profesionales e investigadores
                    interesados en el vector hidrógeno.
                  </p>
                </Link>
              </div>

              <div className="flex justify-end">
                <Link href="/noticias" className="cer-link text-cer-light">
                  Ver todas las noticias →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LÍNEAS DE INVESTIGACIÓN */}
      {/* Dentro de la sección “Líneas de investigación” */}
      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {LINEAS_INVESTIGACION.map((linea) => (
          <Link
            key={linea.id}
            href={`/proyectos?linea=${linea.id}`}
            className="
        group relative rounded-xl overflow-hidden shadow-lg 
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
        cursor-pointer block
      "
            style={{
              backgroundImage: `url(${linea.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Capa de oscurecimiento */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

            {/* Contenido */}
            <div className="relative p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">{linea.titulo}</h3>
              <p className="text-sm opacity-90">{linea.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* BLOQUES DE NAVEGACIÓN */}
      <section className="cer-section">
        <h2 className="text-xl font-semibold text-gray-900">
          Explora el centro
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {BLOQUES_EXPLORA.map((bloque) => (
            <Link key={bloque.href} href={bloque.href} className="cer-nav-card">
              <h3 className="text-base font-semibold text-gray-900">
                {bloque.titulo}
              </h3>
              <p className="text-xs text-gray-600">{bloque.descripcion}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
