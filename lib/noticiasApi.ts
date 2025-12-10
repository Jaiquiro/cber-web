import { noticiasMock, Noticia } from "./noticiasMock";

const USE_MOCK = true; // luego se puede controlar con env vars

export async function getNoticias(): Promise<Noticia[]> {
  if (USE_MOCK) {
    // Simulamos un fetch async
    await new Promise((r) => setTimeout(r, 50));
    return noticiasMock;
  }

  // Ejemplo de cómo sería con API real (Strapi, FastAPI, etc.)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/noticias`, {
    next: { revalidate: 60 }, // opcional: ISR
  });
  const json = await res.json();
  return json.data; // adaptas según tu backend
}

export async function getNoticiaPorSlug(slug: string): Promise<Noticia | null> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 50));
    return noticiasMock.find((n) => n.slug === slug) ?? null;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/noticias?filters[slug][$eq]=${slug}`, {
    next: { revalidate: 60 },
  });
  const json = await res.json();
  return json.data?.[0] ?? null;
}
