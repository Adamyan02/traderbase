import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      borderBottom: "1px solid #eee",
      padding: 15,
      display: "flex",
      justifyContent: "space-between"
    }}>
      <Link href="/">
        <b>CryptoNews RU</b>
      </Link>

      <nav style={{ display: "flex", gap: 15 }}>
        <Link href="/category/bitcoin">Bitcoin</Link>
        <Link href="/category/crypto">Crypto</Link>
        <Link href="/category/psychology">Психология</Link>
      </nav>
    </header>
  );
}
