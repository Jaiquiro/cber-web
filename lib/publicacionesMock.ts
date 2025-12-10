// Datos de ejemplo para Publicaciones antes de conectar el backend

export type Publicacion = {
  slug: string;
  titulo: string;
  anio: number;
  tipo: string; // Artículo, Informe, Capítulo, etc.
  resumen: string;
};

export const publicacionesMock: Publicacion[] = [
  {
    slug: "potencial-solar-altiplano-2025",
    titulo:
      "Estimación del potencial solar fotovoltaico en el altiplano boliviano",
    anio: 2025,
    tipo: "Artículo científico",
    resumen:
      "Análisis del recurso solar y escenarios de expansión fotovoltaica en el altiplano.",
  },
  {
    slug: "hoja-de-ruta-hidrogeno-verde-bolivia",
    titulo: "Hoja de ruta para el hidrógeno verde en Bolivia",
    anio: 2024,
    tipo: "Informe técnico",
    resumen:
      "Diagnóstico del potencial renovable, demanda y escenarios de despliegue de H2V.",
  },
];
