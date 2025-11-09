const PREFIX = "cacamba_"

export const salvarDados = (chave: string, dados: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(PREFIX + chave, JSON.stringify(dados))
  }
}

export const carregarDados = (chave: string) => {
  if (typeof window !== "undefined") {
    const dados = localStorage.getItem(PREFIX + chave)
    return dados ? JSON.parse(dados) : null
  }
  return null
}

export const adicionarTransacao = (tipo: "receita" | "despesa", item: any) => {
  const chave = tipo === "receita" ? "receitas" : "despesas"
  const dados = carregarDados(chave) || []
  dados.push({ ...item, id: Date.now() })
  salvarDados(chave, dados)
}

export const listarTransacoes = (tipo: "receitas" | "despesas") => {
  return carregarDados(tipo) || []
}
