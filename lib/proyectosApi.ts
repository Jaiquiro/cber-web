import { Proyecto, proyectosMock } from "./proyectosMock";

const USE_MOCK = true;

export async function getProyectos(): Promise<Proyecto[]> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 50));
    return proyectosMock;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/proyectos`, {
    next: { revalidate: 60 },
  });
  const json = await res.json();
  return json.data;
}

export async function getProyectoPorSlug(
  slug: string
): Promise<Proyecto | null> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 50));
    return proyectosMock.find((p) => p.slug === slug) ?? null;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${apiUrl}/api/proyectos?filters[slug][$eq]=${slug}`,
    { next: { revalidate: 60 } }
  );
  const json = await res.json();
  return json.data?.[0] ?? null;
}
