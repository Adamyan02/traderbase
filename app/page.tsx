import Link from "next/link"
export default function Home() {
  return (
    const beginnerArticles = [
  {
    title: "Как выбрать криптобиржу",
    href: "/learning/how-to-choose-exchange",
  },
  {
    title: "Что такое риск на сделку",
    href: "/learning/risk-management",
  },
  {
    title: "Финансовая подушка",
    href: "/learning/emergency-fund",
  },
  {
    title: "Ошибки новичков",
    href: "/learning/beginner-mistakes",
  },
]
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Практические знания для трейдеров и инвесторов
        </h2>

        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          Криптовалюты, трейдинг, инвестиции и управление личными
          финансами без сигналов и пустых обещаний.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-500 px-6 py-3 rounded-xl font-medium">
            Начать обучение
          </button>

          <button className="border border-slate-700 px-6 py-3 rounded-xl">
            Обзоры бирж
          </button>
        </div>
      </section>

      {/* Поиск */}
      <section className="max-w-4xl mx-auto px-6">
        <input
          type="text"
          placeholder="Поиск по сайту..."
          className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4"
        />
      </section>

      {/* С чего начать */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-8">
          С чего начать
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
  {beginnerArticles.map((article) => (
    <Link
      key={article.href}
      href={article.href}
      className="
        bg-slate-900
        p-6
        rounded-2xl
        border
        border-slate-800
        hover:border-blue-500
        hover:-translate-y-1
        transition-all
        duration-200
      "
    >
      <h4 className="font-semibold">
        {article.title}
      </h4>
    </Link>
  ))}
</div>
          {[
            "Как выбрать криптобиржу",
            "Что такое риск на сделку",
            "Финансовая подушка",
            "Ошибки новичков",
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Последняя запись автора */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold mb-8">
          Последняя запись автора
        </h3>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h4 className="text-2xl font-semibold mb-3">
            Ошибка, которая стоила мне нескольких месяцев прибыли
          </h4>

          <p className="text-slate-400">
            Личный опыт, выводы и уроки, которые помогли изменить подход к торговле.
          </p>
        </div>
      </section>

      {/* Биржи */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold mb-8">
          Популярные биржи
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Binance",
            "Bybit",
            "OKX",
            "Bitget",
            "BingX",
            "MEXC",
          ].map((exchange) => (
            <div
              key={exchange}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
            >
              <h4 className="text-xl font-semibold">
                {exchange}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
