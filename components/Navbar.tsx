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
    <nav className="relative z-[9999] flex gap-6 text-sm bg-red-500">
      {links.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href))

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              relative
              inline-flex
              items-center
              py-2
              transition
              ${
                isActive
                  ? "text-blue-400 font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-400"
                  : "text-slate-300 hover:text-white"
              }
            `}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
