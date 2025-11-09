"use client"
import { useState } from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Dashboard() {
  const [receita, setReceita] = useState(3000)
  const [despesa, setDespesa] = useState(1200)

  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [
      {
        label: "Receitas",
        data: [500, 600, 400, 700, 800, 300, 200],
        backgroundColor: "green",
      },
      {
        label: "Despesas",
        data: [200, 300, 100, 400, 300, 150, 100],
        backgroundColor: "red",
      },
    ],
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard Financeiro</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Receita do Mês</h2>
          <p className="text-2xl text-green-600">R$ {receita.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Despesas do Mês</h2>
          <p className="text-2xl text-red-600">R$ {despesa.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Lucro do Mês</h2>
          <p className="text-2xl text-blue-600">
            R$ {(receita - despesa).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Gráfico Semanal</h2>
        <Bar data={data} />
      </div>
    </div>
  )
}
