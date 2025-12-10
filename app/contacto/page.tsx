// Página de contacto del centro

export default function ContactoPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Contacto</h1>

      <p className="text-sm text-gray-600">
        Para consultas sobre proyectos, colaboraciones, formación o acceso a
        información técnica, puedes ponerte en contacto con el Centro de
        Energías Renovables a través de los siguientes canales.
      </p>

      {/* Datos de contacto institucional */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
          <h2 className="mb-2 text-base font-semibold">Información general</h2>
          <p className="text-xs text-gray-700">
            Correo:{" "}
            <a
              href="mailto:contacto@cer.edu.bo"
              className="text-sky-600 hover:underline"
            >
              contacto@cer.edu.bo
            </a>
          </p>
          <p className="text-xs text-gray-700">Teléfono: +591 2 000 0000</p>
          <p className="mt-2 text-xs text-gray-700">
            Dirección: Calle Ejemplo 123, Ciudad, Bolivia.
          </p>
        </div>

        {/* “Formulario” estático por ahora, luego se conecta a backend */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
          <h2 className="mb-2 text-base font-semibold">
            Enviar un mensaje rápido
          </h2>
          <p className="text-xs text-gray-600 mb-3">
            Este formulario es solo de demostración. Más adelante se conectará a
            un servicio de correo o backend para gestionar consultas.
          </p>

          <form className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs text-gray-700">Nombre</label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none"
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-700">Mensaje</label>
              <textarea
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none"
                rows={4}
                placeholder="Escribe aquí tu consulta o comentario"
              />
            </div>

            <button
              type="button"
              className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-600"
            >
              Enviar (demo)
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
