// Datos de ejemplo para Eventos antes de conectar el backend

export type Evento = {
  slug: string;
  titulo: string;
  fecha: string; // "2026-02-03" o "03 febrero 2026"
  modalidad: "Presencial" | "Virtual" | "Híbrido";
  lugar: string; // dirección o "Online"
  resumen: string;
};

export const eventosMock: Evento[] = [
  {
    slug: "taller-hidrogeno-verde-introductorio",
    titulo: "Taller introductorio sobre hidrógeno verde",
    fecha: "15 marzo 2026",
    modalidad: "Virtual",
    lugar: "Plataforma Zoom",
    resumen:
      "Sesión introductoria sobre fundamentos, aplicaciones y desafíos del hidrógeno verde en Bolivia.",
  },
  {
    slug: "seminario-integracion-renovables-sistemas-aislados",
    titulo: "Seminario sobre integración de renovables en sistemas aislados",
    fecha: "28 abril 2026",
    modalidad: "Presencial",
    lugar: "Auditorio del Centro de Energías Renovables",
    resumen:
      "Seminario técnico sobre diseño de sistemas híbridos para comunidades alejadas de la red eléctrica.",
  },
];
