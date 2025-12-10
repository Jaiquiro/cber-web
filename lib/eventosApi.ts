import { Evento, eventosMock } from "./eventosMock";

const USE_MOCK = true; // luego lo cambias a false cuando tengas backend real

// Obtiene la lista de eventos
export async function getEventos(): Promise<Evento[]> {
  if (USE_MOCK) {
    // Simulamos pequeña latencia de red
    await new Promise((r) => setTimeout(r, 50));
    return eventosMock;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/eventos`, {
    next: { revalidate: 60 },
  });
  const json = await res.json();
  return json.data; // adapta según la forma en que responda tu backend
}

// Obtiene un evento específico por su slug
export async function getEventoPorSlug(slug: string): Promise<Evento | null> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 50));
    return eventosMock.find((e) => e.slug === slug) ?? null;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${apiUrl}/api/eventos?filters[slug][$eq]=${slug}`,
    { next: { revalidate: 60 } },
  );
  const json = await res.json();
  return json.data?.[0] ?? null;
}
