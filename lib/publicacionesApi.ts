import { Publicacion, publicacionesMock } from "./publicacionesMock";

const USE_MOCK = true; // luego lo cambias a false cuando tengas backend real

export async function getPublicaciones(): Promise<Publicacion[]> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 50));
    return publicacionesMock;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/publicaciones`, {
    next: { revalidate: 60 },
  });
  const json = await res.json();
  return json.data; // adaptar según tu backend
}

export async function getPublicacionPorSlug(
  slug: string
): Promise<Publicacion | null> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 50));
    return publicacionesMock.find((p) => p.slug === slug) ?? null;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${apiUrl}/api/publicaciones?filters[slug][$eq]=${slug}`,
    { next: { revalidate: 60 } }
  );
  const json = await res.json();
  return json.data?.[0] ?? null;
}
