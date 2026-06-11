"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigation } from "@/data/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Главная" },
    { href: "/learning", label: "Обучение" },
    { href: "/practice", label: "Практика" },
    { href: "/blog", label: "Блог" },
    { href: "/exchanges", label: "Биржи" },
    { href: "/finance", label: "Финансы" },
    { href: "/about", label: "О проекте" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
  href="/"
  className="text-white font-bold tracking-wide text-lg"
>
  TRADERBASE
</Link>

        {/* Nav */}
        <nav className="flex gap-2">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href))

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 rounded-xl text-sm transition-all
                  ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

      </div>
    </header>
  )
}
