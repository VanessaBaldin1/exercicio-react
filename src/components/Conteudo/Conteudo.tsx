import Artigo from "../Artigo/Artigo";
import estilos from "./Conteudo.module.css";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      <section className={`${estilos.conteudosection} ${estilos.arredondada} ${estilos.sombra}`}>
        <h2>O Poder do Design: Criatividade que Transforma</h2>

        <p>
          Design não é apenas estética. É propósito visual. É onde a
          criatividade encontra a funcionalidade e transforma ideias em
          experiências. No mundo moderno, tudo comunica — cores, formas,
          movimentos e silêncios. Um bom design não só encanta os olhos, mas
          conta histórias, resolve problemas e conecta pessoas.
        </p>

        <Artigo />

      </section>
    </main>
  );
}