import { posts } from "@/data/posts";

export default function Article({ params }: any) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) return <div>Статья не найдена</div>;

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>

      <hr />

      <article style={{ lineHeight: 1.7 }}>
        {post.content}
      </article>

      {/* monetization */}
      <div style={{
        marginTop: 40,
        padding: 20,
        background: "#eee"
      }}>
        👉 Рекомендуем: криптобиржа / сервис / инструмент
      </div>
    </main>
  );
}
