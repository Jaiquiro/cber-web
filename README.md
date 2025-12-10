# Portal del Centro de Energías Renovables

Portal web institucional para el Centro de Energías Renovables, desarrollado con **Next.js** y **Tailwind CSS**, pensado para difundir noticias, publicaciones, proyectos, eventos y el trabajo del equipo de investigación.

El objetivo es contar con una plataforma moderna, escalable y lista para integrarse con un backend o CMS (por ejemplo, Strapi) que permita la gestión de contenidos por parte del personal autorizado del centro.

---

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Node.js (LTS)
- Git + GitHub

---

## 📂 Estructura principal del proyecto

```txt
cer-web/
 ├─ app/
 │   ├─ page.tsx                  # Home del portal
 │   ├─ layout.tsx                # Layout global (Header + Footer)
 │   ├─ sobre/                    # Información institucional
 │   ├─ noticias/                 # Listado de noticias
 │   │   └─ [slug]/               # Detalle de noticia
 │   ├─ publicaciones/            # Listado de publicaciones
 │   │   └─ [slug]/               # Detalle de publicación
 │   ├─ proyectos/                # Listado de proyectos
 │   │   └─ [slug]/               # Detalle de proyecto
 │   ├─ eventos/                  # Listado de eventos
 │   │   └─ [slug]/               # Detalle de evento
 │   ├─ equipo/                   # Equipo del centro
 │   └─ contacto/                 # Datos y formulario de contacto (demo)
 │
 ├─ components/
 │   ├─ Header.tsx                # Cabecera con navegación
 │   └─ Footer.tsx                # Pie de página
 │
 ├─ lib/
 │   ├─ noticiasMock.ts           # Datos mock para noticias
 │   ├─ noticiasApi.ts            # Capa de acceso a datos de noticias
 │   ├─ publicacionesMock.ts      # Datos mock para publicaciones
 │   ├─ publicacionesApi.ts       # Capa de acceso a datos de publicaciones
 │   ├─ proyectosMock.ts          # Datos mock para proyectos
 │   ├─ proyectosApi.ts           # Capa de acceso a datos de proyectos
 │   ├─ eventosMock.ts            # Datos mock para eventos
 │   ├─ eventosApi.ts             # Capa de acceso a datos de eventos
 │   └─ equipoMock.ts             # Datos mock para el equipo
 │
 ├─ public/                       # Recursos estáticos
 ├─ tailwind.config.ts
 ├─ postcss.config.mjs
 ├─ next.config.ts
 ├─ tsconfig.json
 ├─ package.json
 └─ .gitignore
```
