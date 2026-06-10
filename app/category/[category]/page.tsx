import { posts } from "@/data/posts";
import Link from "next/link";

export default function Category({ params }: any) {
  const filtered = posts.filter(p => p.category === params.category);

  return (
    <main style={{ padding: 20 }}>
      <h1>Категория: {params.category}</h1>

      {filtered.map(p => (
        <Link key={p.slug} href={`/article/${p.slug}`}>
          <div style={{ marginBottom: 15 }}>
            <h3>{p.title}</h3>
          </div>
        </Link>
      ))}
    </main>
  );
}
