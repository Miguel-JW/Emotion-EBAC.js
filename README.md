# Emotion-EBAC.js
# CardProduto — Refatoração com Styled Components

Componente `CardProduto` refatorado de CSS tradicional para CSS-in-JS, usando **Styled Components**.

## Como rodar

```bash
npm install
npm run dev
```

## Por que Styled Components (em vez de Emotion)?

Ambas as bibliotecas resolvem o mesmo problema com APIs muito parecidas (`styled.div`,
template literals, interpolação de props). Optei por Styled Components por ser a
biblioteca mais usada no mercado e por ter uma sintaxe praticamente idêntica à do
`@emotion/styled` — a troca entre as duas, se necessário, seria simples:

```js
// styled-components
import styled from 'styled-components'

// emotion (API equivalente)
import styled from '@emotion/styled'
```

## Estrutura

```
src/
├── components/
│   └── CardProduto.jsx   # componente + todos os seus styled components
├── App.jsx                # dados estáticos + grid de cards
└── main.jsx
```

Os estilos foram mantidos **dentro do mesmo arquivo** do componente que os usa
(`CardProduto.jsx`), como permitido pelo exercício — mas organizados em blocos
claros (`Card`, `Nome`, `Preco`, `Botao`), cada um com um comentário explicando
sua responsabilidade visual.

## Estilização dinâmica do botão

O requisito pedia que o botão mudasse de cor com base em uma prop `adicionado`:

- `true` → verde `#198754`
- `false` → cinza `#6c757d`

Isso foi implementado interpolando uma função dentro do template literal do
styled component:

```js
const Botao = styled.button`
  background-color: ${(props) => (props.$adicionado ? '#198754' : '#6c757d')};
`
```

### Por que `$adicionado` em vez de `adicionado`?

O Styled Components v6 introduziu as chamadas **transient props** (prefixadas
com `$`). Uma prop com `$` é usada apenas para decidir o CSS e **não é
repassada para o elemento HTML real** (`<button>`). Sem o `$`, o React geraria
um warning no console por receber um atributo desconhecido (`adicionado`) em
um `<button>` nativo. É uma boa prática de nomeação específica do
Styled Components.

## Inspecionando com o React DevTools

1. Instale a extensão **React Developer Tools** no navegador.
2. Abra a aplicação (`npm run dev`) e a aba **Components** do DevTools.
3. Selecione o componente `Botao` dentro de um `CardProduto`.
4. Clique no botão "Adicionar ao carrinho" na tela e observe, no painel de
   props do DevTools, o valor de `$adicionado` alternando entre `false` e
   `true` — e a cor do botão mudando em tempo real (verde ↔ cinza).
