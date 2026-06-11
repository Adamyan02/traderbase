import Link from "next/link"

export default function Page() {
  const exchanges = ["binance", "bybit", "okx"]

  return (
    <main>
      <h1>Биржи</h1>

      <div className="grid gap-4 mt-6">
        {exchanges.map((ex) => (
          <Link
            key={ex}
            href={`/exchanges/${ex}`}
            className="block p-4 bg-slate-900 rounded-xl"
          >
            {ex.toUpperCase()}
          </Link>
        ))}
      </div>
    </main>
  )
}
