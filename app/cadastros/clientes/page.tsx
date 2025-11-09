"use client"
import { useState } from "react"
import { salvarDados, carregarDados } from "@/lib/localStorage"

export default function ClientesPage() {
  const [clientes, setClientes] = useState<any[]>(carregarDados("clientes") || [])
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  const adicionarCliente = () => {
    if (!nome || !telefone) return
    const novo = { id: Date.now(), nome, telefone }
    const atualizados = [...clientes, novo]
    setClientes(atualizados)
    salvarDados("clientes", atualizados)
    setNome("")
    setTelefone("")
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Clientes</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Adicionar Cliente</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <button
            onClick={adicionarCliente}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Adicionar
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Telefone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td className="px-6 py-4">{cliente.nome}</td>
                <td className="px-6 py-4">{cliente.telefone}</td>
                <td className="px-6 py-4">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">Editar</button>
                  <button className="text-red-600 hover:text-red-900">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
