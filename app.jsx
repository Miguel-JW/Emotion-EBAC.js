import styled from 'styled-components'
import CardProduto from './components/CardProduto.jsx'

// Dados estáticos apenas para preencher a tela (poderiam vir de uma API)
const produtos = [
  { id: 1, nome: 'Fone de Ouvido Bluetooth', preco: 'R$ 129,90' },
  { id: 2, nome: 'Mouse Sem Fio', preco: 'R$ 79,90' },
  { id: 3, nome: 'Teclado Mecânico', preco: 'R$ 249,90' },
]

// Layout da página: outro exemplo de styled component, usado só uma vez,
// então não precisa de arquivo próprio — mantido aqui para simplicidade
const Pagina = styled.div`
  min-height: 100vh;
  background-color: #eef1f6;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 48px 20px;
`

export default function App() {
  return (
    <Pagina>
      {produtos.map((produto) => (
        <CardProduto key={produto.id} nome={produto.nome} preco={produto.preco} />
      ))}
    </Pagina>
  )
}
