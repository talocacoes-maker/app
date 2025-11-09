"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Map, DollarSign, Truck, Users, Settings } from "lucide-react"

const menus = [
  { nome: "Dashboard", icone: Home, href: "/" },
  { nome: "Mapa", icone: Map, href: "/mapa" },
  { nome: "Locações", icone: Truck, href: "/locacoes" },
  { nome: "Financeiro", icone: DollarSign, href: "/financeiro" },
  { nome: "Clientes", icone: Users, href: "/cadastros/clientes" },
]

export default function Menu() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white shadow-md h-screen fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Caçambas Pro</h1>
      </div>
      <nav className="mt-6">
        {menus.map((menu) => {
          const Icon = menu.icone
          const ativo = pathname === menu.href
          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                ativo
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {menu.nome}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
