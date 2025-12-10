import Link from "next/link";
import { getNoticias } from "@/lib/noticiasApi";

export default async function NoticiasPage() {
  const noticias = await getNoticias();

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Noticias del Centro</h1>
      <p className="text-sm text-gray-600">
        Actualizaciones, actividades y comunicados oficiales del Centro de
        Energías Renovables.
      </p>

      <div className="space-y-3">
        {noticias.map((n) => (
          <Link
            key={n.slug}
            href={`/noticias/${n.slug}`}
            className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm shadow-sm hover:border-emerald-500 transition"
          >
            <p className="text-xs text-gray-500">
              {n.fecha} · {n.categoria}
            </p>
            <p className="font-semibold">{n.titulo}</p>
            <p className="mt-1 text-xs text-gray-600 line-clamp-2">
              {n.resumen}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
