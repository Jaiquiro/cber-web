import Image from "next/image";
import { equipoMock } from "@/lib/equipoMock";
import { aliadosMock } from "@/lib/aliadosMock";

export default function SobrePage() {
  return (
    <div className="space-y-12">
      {/* Presentación */}
      <section className="cer-section">
        <h1 className="text-2xl font-semibold text-white">Sobre el Centro</h1>

        <p className="mt-3 max-w-3xl text-sm text-white/85">
          El Centro de Energías Renovables es una iniciativa orientada a la
          investigación aplicada, formación de capacidades y transferencia
          tecnológica para impulsar la transición energética en Bolivia.
        </p>
      </section>

      {/* Misión / Visión */}
      <section className="grid gap-4 md:grid-cols-2">
        {[
          {
            titulo: "Misión",
            texto:
              "Generar conocimiento aplicado y soluciones técnicas en energías renovables y eficiencia energética, articulando academia, sector público y sector productivo.",
          },
          {
            titulo: "Visión",
            texto:
              "Ser un referente nacional en investigación y análisis técnico para la transición energética y el desarrollo sostenible.",
          },
        ].map((item) => (
          <div
            key={item.titulo}
            className="group block overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="flex items-stretch h-full">
              {/* Banda institucional */}
              <div className="w-2 bg-gradient-to-b from-cer-dark via-emerald-600 to-cer-blue" />

              {/* Texto */}
              <div className="flex-grow p-5">
                <h2 className="text-base font-semibold text-gray-900">
                  {item.titulo}
                </h2>
                <p className="mt-2 text-sm text-gray-700">{item.texto}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Equipo */}
      <section className="cer-section">
        <h2 className="text-xl font-semibold text-white">Equipo del Centro</h2>

        <div className="mt-4 space-y-3">
          {equipoMock.map((m) => (
            <div
              key={m.id}
              className="group block overflow-hidden rounded-2xl
                   border border-white/20 bg-white/90 shadow-sm backdrop-blur
                   transition-all duration-300
                   hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="flex items-stretch gap-4">
                {/* Banda institucional */}
                <div className="w-2 bg-gradient-to-b from-cer-dark via-emerald-600 to-cer-blue" />

                {/* Foto */}
                <div className="relative w-20 shrink-0 overflow-hidden bg-slate-200">
                  {m.foto ? (
                    <Image
                      src={m.foto}
                      alt={m.nombre}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-b from-cer-dark to-cer-blue" />
                  )}
                </div>

                {/* Texto */}
                <div className="flex-1 p-4">
                  <h3 className="font-semibold text-gray-900">{m.nombre}</h3>
                  <p className="text-sm text-gray-700">{m.rol}</p>
                  <p className="text-xs text-gray-500">{m.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Asociados */}
      <section className="cer-section">
        <h2 className="text-xl font-semibold text-white">
          Instituciones asociadas
        </h2>

        <div className="mt-4 space-y-3">
          {aliadosMock.map((a) => (
            <div
              key={a.id}
              className="group block overflow-hidden rounded-2xl
                   border border-white/20 bg-white/90 shadow-sm backdrop-blur
                   transition-all duration-300
                   hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="flex items-stretch gap-4">
                {/* Banda */}
                <div className="w-2 bg-gradient-to-b from-cer-dark via-emerald-600 to-cer-blue" />

                {/* Logo */}
                <div className="relative w-24 shrink-0 flex items-center justify-center bg-white">
                  {a.logo ? (
                    <Image
                      src={a.logo}
                      alt={a.nombre}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  ) : (
                    <div className="text-xs text-gray-400">Logo</div>
                  )}
                </div>

                {/* Texto */}
                <div className="flex-1 p-4">
                  <h3 className="font-semibold text-gray-900">{a.nombre}</h3>
                  <p className="text-xs text-gray-500">{a.tipo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
