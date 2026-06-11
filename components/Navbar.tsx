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
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="font-bold text-lg tracking-wide">
          TRADERBASE
        </div>

        {/* Menu */}
        <nav className="flex gap-6 text-sm">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href))

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative transition
                  ${isActive
                    ? "text-blue-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                  }
                `}
              >
                {link.label}

                {/* active underline */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400" />
                )}
              </Link>
            )
          })}
        </nav>

      </div>
    </header>
  )
}
