"use client"
import { useState, useEffect } from "react"
import { carregarDados } from "@/lib/localStorage"
import Link from "next/link"

export default function LocacoesPage() {
  const [locacoes, setLocacoes] = useState<any[]>([])

  useEffect(() => {
    setLocacoes(carregarDados("locacoes") || [])
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "entregue": return "bg-green-100 text-green-800"
      case "para-retirar": return "bg-yellow-100 text-yellow-800"
      case "finalizada": return "bg-blue-100 text-blue-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "nao-entregue": return "Não Entregue"
      case "para-retirar": return "Para Retirar"
      case "finalizada": return "Finalizada"
      default: return status
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Locações</h1>
        <Link
          href="/locacoes/nova"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Nova Locação
        </Link>
      </div>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {locacoes.map((loc) => (
              <tr key={loc.id}>
                <td className="px-6 py-4 whitespace-nowrap">{loc.cliente}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(loc.status)}`}>
                    {getStatusLabel(loc.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{loc.data}</td>
                <td className="px-6 py-4 whitespace-nowrap">R$ {loc.valor.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">Editar</button>
                  <button className="text-red-600 hover:text-red-900">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {locacoes.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhuma locação cadastrada. <Link href="/locacoes/nova" className="text-blue-600 hover:underline">Criar primeira locação</Link>
          </div>
        )}
      </div>
    </div>
  )
}
