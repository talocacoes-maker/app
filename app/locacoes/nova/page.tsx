"use client"
import { useState } from "react"
import { salvarDados, carregarDados } from "@/lib/localStorage"

export default function NovaLocacaoPage() {
  const [cliente, setCliente] = useState("")
  const [valor, setValor] = useState("")
  const [data, setData] = useState("")
  const [status, setStatus] = useState("nao-entregue")

  const salvarLocacao = () => {
    if (!cliente || !valor || !data) return

    const locacoes = carregarDados("locacoes") || []
    const nova = {
      id: Date.now(),
      cliente,
      valor: parseFloat(valor),
      data,
      status,
      lat: -27.5954 + (Math.random() - 0.5) * 0.02,
      lng: -48.5480 + (Math.random() - 0.5) * 0.02,
    }

    locacoes.push(nova)
    salvarDados("locacoes", locacoes)

    // Adiciona como receita
    const receitas = carregarDados("receitas") || []
    receitas.push({
      id: Date.now(),
      descricao: `Locação ${cliente}`,
      valor: parseFloat(valor),
      data,
      tipo: "receita",
    })
    salvarDados("receitas", receitas)

    // Limpa formulário
    setCliente("")
    setValor("")
    setData("")
    alert("Locação salva com sucesso!")
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Nova Locação</h1>

      <div className="bg-white p-6 rounded shadow max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Cliente</label>
            <input
              type="text"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Nome do cliente"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Valor (R$)</label>
            <input
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="300.00"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Data</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="nao-entregue">Não Entregue</option>
              <option value="entregue">Entregue</option>
              <option value="para-retirar">Para Retirar</option>
              <option value="finalizada">Finalizada</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={salvarLocacao}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Salvar Locação
          </button>
          <a
            href="/locacoes"
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
          >
            Cancelar
          </a>
        </div>
      </div>
    </div>
  )
}
