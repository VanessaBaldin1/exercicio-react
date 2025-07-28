import { useEffect } from "react";

export default function TiposDesign() {
  useEffect(() => {
    document.title = "Tipos Design | Design Fácil";
  });

  return (
    <section>
      <h2>Tipos de Design</h2>

      <p>Conheça os principais tipos de design e suas funções:</p>

      <h2>🎨 Design Gráfico</h2>
      <ul>
        <li>Foca na comunicação visual.</li>
        <li>
          Criação de logotipos, cartazes, embalagens e materiais
          impressos/digitais.
        </li>
      </ul>

      <h2>🖥️ Design Digital / Web Design</h2>
      <ul>
        <li>Criação de interfaces para sites e aplicativos.</li>
        <li>Envolve usabilidade, layout e responsividade.</li>
      </ul>

      <h2>🧠 UX Design (User Experience)</h2>
      <ul>
        <li>Foco na experiência do usuário com produtos digitais.</li>
        <li>Inclui pesquisa, testes e protótipos.</li>
      </ul>

      <h2>🎯 UI Design (User Interface)</h2>
      <ul>
        <li>
          Criação visual da interface: botões, ícones, cores e tipografia.
        </li>
        <li>Complementa o UX com estética e clareza.</li>
      </ul>

      <h2>📦 Design de Embalagem</h2>
      <ul>
        <li>Criação de rótulos, caixas e embalagens atrativas e funcionais.</li>
        <li>Valoriza o produto e reforça a marca.</li>
      </ul>

      <h2>🏢 Design de Interiores</h2>
      <ul>
        <li>Planejamento de espaços internos.</li>
        <li>Combina estética, conforto e funcionalidade.</li>
      </ul>

      <h2>🧪 Design de Produto</h2>
      <ul>
        <li>Desenvolvimento de objetos físicos e digitais.</li>
        <li>Une forma, função, inovação e ergonomia.</li>
      </ul>
    </section>
  );
}
