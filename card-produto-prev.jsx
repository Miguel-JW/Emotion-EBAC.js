import React, { useState } from "react";

/*
 * IMPORTANTE: este preview usa estilos inline apenas para simular visualmente
 * o resultado no chat (a biblioteca styled-components não pode ser importada
 * neste ambiente de preview). A implementação REAL com styled-components,
 * incluindo os comentários explicando cada decisão, está no projeto
 * "card-produto-styled-components.zip".
 */

function CardProduto({ nome, preco }) {
  const [adicionado, setAdicionado] = useState(false);

  return (
    <div
      style={{
        width: 240,
        padding: 20,
        borderRadius: 16,
        background: "#fff",
        border: "1px solid #e2e6ee",
        boxShadow: "0 12px 30px -20px rgba(30,42,56,0.35)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#1e2a38" }}>{nome}</h3>
      <p style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#3454d1" }}>{preco}</p>
      <button
        onClick={() => setAdicionado((prev) => !prev)}
        style={{
          border: "none",
          borderRadius: 10,
          padding: "10px 16px",
          fontSize: 14,
          fontWeight: 600,
          color: "#fff",
          cursor: "pointer",
          backgroundColor: adicionado ? "#198754" : "#6c757d",
          transition: "background-color 0.2s ease",
        }}
      >
        {adicionado ? "Adicionado ✓" : "Adicionar ao carrinho"}
      </button>
    </div>
  );
}

const produtos = [
  { id: 1, nome: "Fone de Ouvido Bluetooth", preco: "R$ 129,90" },
  { id: 2, nome: "Mouse Sem Fio", preco: "R$ 79,90" },
  { id: 3, nome: "Teclado Mecânico", preco: "R$ 249,90" },
];

export default function App() {
  return (
    <div
      style={{
        minHeight: 420,
        background: "#eef1f6",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 20,
        padding: "32px 16px",
      }}
    >
      {produtos.map((p) => (
        <CardProduto key={p.id} nome={p.nome} preco={p.preco} />
      ))}
    </div>
  );
}
