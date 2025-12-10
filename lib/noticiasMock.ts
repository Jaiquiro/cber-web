// Datos de ejemplo para Noticias antes de conectar el backend

export type Noticia = {
  slug: string;
  titulo: string;
  fecha: string;
  categoria: string;
  resumen: string;
};

export const noticiasMock: Noticia[] = [
  {
    slug: "programa-hidrogeno-verde-2026",
    titulo: "Lanzamiento del programa de investigación en hidrógeno verde 2026",
    fecha: "15 enero 2026",
    categoria: "Convocatoria",
    resumen:
      "Se abre la convocatoria para proyectos orientados al desarrollo de hidrógeno verde en Bolivia.",
  },
  {
    slug: "taller-integracion-renovables-sistemas-aislados",
    titulo: "Taller sobre integración de renovables en sistemas aislados",
    fecha: "3 febrero 2026",
    categoria: "Evento",
    resumen:
      "Taller técnico sobre diseño y operación de sistemas híbridos diésel–renovables.",
  },
];
