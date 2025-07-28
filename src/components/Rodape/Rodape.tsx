import estilos from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <h2>Pequeno site criado com React</h2>
      <p>
        Desenvolvido por <b>Vanessa</b> &copy;2025
      </p>
    </footer>
  );
}
