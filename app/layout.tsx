import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Menu from "@/components/Menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sistema Caçambas Pro",
  description: "Controle de locação de caçambas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Menu />
        <main className="ml-64 p-6 bg-gray-100 min-h-screen">{children}</main>
      </body>
    </html>
  )
}
