import { useState } from 'react'
import styled from 'styled-components'

/* ------------------------------------------------------------------ */
/* CSS-in-JS com Styled Components                                    */
/*                                                                     */
/* Cada elemento visual do card vira um "styled component" próprio.   */
/* Isso substitui a abordagem tradicional (className + arquivo .css)  */
/* por estilos escritos com template literals, vivendo junto do       */
/* componente que os usa — vantagem: escopo automático (sem colisão   */
/* de nomes de classe) e fácil leitura de "o que estiliza o quê".     */
/* ------------------------------------------------------------------ */

// Container do card: define o "cartão" em si (bordas, sombra, espaçamento)
const Card = styled.div`
  width: 240px;
  padding: 20px;
  border-radius: 16px;
  background-color: #ffffff;
  border: 1px solid #e2e6ee;
  box-shadow: 0 12px 30px -20px rgba(30, 42, 56, 0.35);
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Inter', system-ui, sans-serif;

  /* leve efeito de elevação ao passar o mouse, só para dar vida ao card */
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px -18px rgba(30, 42, 56, 0.4);
  }
`

// Nome do produto: tipografia em destaque, mas neutra (não compete com o preço)
const Nome = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1e2a38;
  line-height: 1.3;
`

// Preço: cor de destaque (accent) para diferenciar a hierarquia da informação
const Preco = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #3454d1;
`

/*
 * Botão "Adicionar ao carrinho".
 *
 * Estilização dinâmica: a cor de fundo depende da prop "$adicionado".
 * Usamos interpolação de função dentro do template literal — o styled-
 * components passa as props recebidas pelo componente para essa função,
 * permitindo decidir o valor do CSS em tempo de execução.
 *
 * Boa prática de nomeação: prefixamos a prop com "$" (transient prop,
 * recurso do styled-components v6). Isso garante que "adicionado" seja
 * usado SOMENTE para estilização e não seja repassado para o elemento
 * <button> do DOM — evitando o warning do React de atributo desconhecido.
 */
const Botao = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;

  /* Regra principal da estilização dinâmica pedida no exercício */
  background-color: ${(props) => (props.$adicionado ? '#198754' : '#6c757d')};

  &:hover {
    opacity: 0.92;
  }

  &:active {
    transform: scale(0.98);
  }
`

/**
 * CardProduto
 * Exibe nome, preço e um botão de "adicionar ao carrinho" cuja cor
 * muda dinamicamente conforme o estado local "adicionado".
 *
 * Dica de inspeção: abra o React DevTools, selecione o componente
 * <Botao> e observe a prop "$adicionado" mudando entre true/false
 * a cada clique — e a classe gerada pelo styled-components também
 * muda, pois o CSS interpolado é recalculado.
 */
export default function CardProduto({ nome, preco }) {
  const [adicionado, setAdicionado] = useState(false)

  const handleClick = () => {
    setAdicionado((prev) => !prev)
  }

  return (
    <Card>
      <Nome>{nome}</Nome>
      <Preco>{preco}</Preco>
      <Botao $adicionado={adicionado} onClick={handleClick}>
        {adicionado ? 'Adicionado ✓' : 'Adicionar ao carrinho'}
      </Botao>
    </Card>
  )
}
