import { posts } from "@/data/posts";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside style={{
      width: 250,
      padding: 20,
      borderLeft: "1px solid #eee"
    }}>
      <h3>Популярное</h3>

      {posts.map(p => (
        <Link key={p.slug} href={`/article/${p.slug}`}>
          <div style={{ marginBottom: 10 }}>
            {p.title}
          </div>
        </Link>
      ))}
    </aside>
  );
}
