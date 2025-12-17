// lib/noticiasApi.ts
import { Noticia, noticiasMock } from "./noticiasMock";

const USE_MOCK = true;

function normSlug(s: string) {
  return decodeURIComponent(s).trim().toLowerCase();
}

export async function getNoticias(): Promise<Noticia[]> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 50));
    return noticiasMock;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/noticias`, {
    next: { revalidate: 60 },
  });
  const json = await res.json();
  return json.data;
}

export async function getNoticiaPorSlug(slug: string): Promise<Noticia | null> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 50));
    const target = normSlug(slug);
    return noticiasMock.find((n) => normSlug(n.slug) === target) ?? null;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${apiUrl}/api/noticias?filters[slug][$eq]=${encodeURIComponent(slug)}`,
    { next: { revalidate: 60 } }
  );
  const json = await res.json();
  return json.data?.[0] ?? null;
}
