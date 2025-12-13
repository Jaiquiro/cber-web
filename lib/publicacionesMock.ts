// Datos de ejemplo para Publicaciones antes de conectar el backend

export type Publicacion = {
  slug: string;
  titulo: string;
  anio: number;


  
  // Tipo lógico (para filtros y layout)
  tipo: "cientifico" | "editorial" | "opinion";

  // Tipo visible (texto académico)
  categoria: string;

  resumen: string;

  // Carátula opcional
  cover?: string;
};

export const publicacionesMock: Publicacion[] = [
  {
    slug: "potencial-solar-altiplano-2025",
    titulo:
      "Estimación del potencial solar fotovoltaico en el altiplano boliviano",
    anio: 2025,
    tipo: "cientifico",
    categoria: "Artículo científico",
    resumen:
      "Análisis del recurso solar y escenarios de expansión fotovoltaica en el altiplano.",
    cover: "/covers/cv1.png",
  },
  {
    slug: "hoja-de-ruta-hidrogeno-verde-bolivia",
    titulo: "Hoja de ruta para el hidrógeno verde en Bolivia",
    anio: 2024,
    tipo: "cientifico",
    categoria: "Informe técnico",
    resumen:
      "Diagnóstico del potencial renovable, demanda y escenarios de despliegue de H2V.",
    cover: "/covers/hoja-ruta-h2v.webp",
  },
  {
    slug: "editorial-crisis-diesel-bolivia",
    titulo: "La crisis del diésel y la transición energética en Bolivia",
    anio: 2025,
    tipo: "editorial",
    categoria: "Editorial",
    resumen:
      "Reflexión institucional sobre los desafíos estructurales del sector energético.",
    cover: "/covers/editorial-diesel.webp",
  },
  {
    slug: "opinion-hidrogeno-verde-bolivia",
    titulo: "¿Está Bolivia lista para el hidrógeno verde?",
    anio: 2025,
    tipo: "opinion",
    categoria: "Artículo de opinión",
    resumen:
      "Análisis crítico sobre capacidades, tiempos y decisiones estratégicas para el H2V.",
    // sin cover → usará fallback institucional
  },
];
