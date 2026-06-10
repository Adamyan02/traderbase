import { posts } from "@/data/posts";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <main style={{ flex: 1, padding: 20 }}>
        <h1>Криптовалюта и инвестиции — новости и аналитика</h1>

        <div style={{ display: "grid", gap: 15, marginTop: 20 }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/article/${post.slug}`}>
              <div style={{
                border: "1px solid #eee",
                padding: 15,
                borderRadius: 8
              }}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* MONETIZATION BLOCK */}
        <div style={{
          marginTop: 40,
          padding: 20,
          background: "#f5f5f5"
        }}>
          🔥 Здесь будет реклама / партнёрки / баннеры
        </div>
      </main>

      <Sidebar />
    </>
  );
}
