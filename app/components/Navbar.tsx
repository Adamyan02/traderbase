"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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
    <header className="border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TRADERBASE</h1>

        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href))

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                }
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
