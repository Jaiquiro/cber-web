export type Proyecto = {
  slug: string;
  nombre: string;
  estado: "En curso" | "Finalizado" | "Planificado";
  responsable: string;
  periodo: string; // "2024–2026"
  resumen: string;
};

export const proyectosMock: Proyecto[] = [
  {
    slug: "microred-hibrida-altiplano",
    nombre: "Diseño de microred híbrida diésel–solar en el altiplano",
    estado: "En curso",
    responsable: "Ing. Nombre Apellido",
    periodo: "2025–2026",
    resumen:
      "Proyecto piloto de microred híbrida para comunidades aisladas en el altiplano boliviano.",
  },
  {
    slug: "auditorias-energeticas-edificios-publicos",
    nombre: "Programa de auditorías energéticas en edificios públicos",
    estado: "Planificado",
    responsable: "Equipo CER",
    periodo: "2026–2028",
    resumen:
      "Implementación de auditorías energéticas para mejorar la eficiencia en instituciones públicas.",
  },
];
