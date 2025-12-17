// lib/noticiasMock.ts
export type Noticia = {
  slug: string;
  titulo: string;
  fecha: string;
  categoria: string;
  resumen: string;
  contenido?: string; // markdown
  cover?: string; // "/news/xxx.jpg"
  pdfUrl?: string; // "/docs/xxx.pdf"
};

export const noticiasMock: Noticia[] = [
  {
    slug: "programa-hidrogeno-verde-2026",
    titulo: "Lanzamiento del programa de investigación en hidrógeno verde 2026",
    fecha: "15 enero 2026",
    categoria: "convocatoria",
    resumen:
      "Iniciativa orientada a proyectos de I+D en producción, almacenamiento y uso de hidrógeno verde.",
    cover: "/news/h2v-2026.jpg",
    contenido: `## Convocatoria

El Centro abre la convocatoria 2026 para proyectos de I+D en hidrógeno verde.

### Líneas priorizadas
- Producción (electrólisis y sistemas híbridos)
- Almacenamiento y logística
- Usos industriales y movilidad`,
    pdfUrl: "/docs/convocatoria-h2v-2026.pdf",
  },
];
