import estilos from "./Artigo.module.css";

export default function Artigo() {
  return (
    <article className={estilos.artigo}>
      <h3>🔸 Criatividade é o coração pulsante do design. </h3>
      <p>
        É o ato de ver o invisível, de criar algo novo onde antes havia apenas o
        comum. É transformar um layout em emoção, uma paleta em personalidade.
      </p>
    </article>
  );
}
