import type { CSSProperties } from "react";

const estilosRodape: CSSProperties = {
  backgroundColor: "#000",        // cor de fundo preta
  color: "white",
  textAlign: "center",
  padding: "0.5rem",              // padding menor para diminuir a altura
  fontSize: "0.9rem",             // tamanho de fonte um pouco menor (opcional)
};

export default function Rodape() {
  return (
    <footer style={estilosRodape}>
      <h2 style={{ margin: "0", fontSize: "1rem" }}>Pequeno site criado com React</h2>
      <p style={{ color: "blue", fontWeight: "bold", margin: "0.2rem 0" }}>
        Desenvolvido por{" "}
        <b>
         Vanessa
        </b>{" "}
        &copy;2025
      </p>
    </footer>
  );
}
