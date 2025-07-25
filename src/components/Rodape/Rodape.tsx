import type { CSSProperties } from "react";

const estiloRodape: CSSProperties = {
  backgroundColor: "#1111119d",
  color: "white",
  textAlign: "center",
  padding: "1rem",
};

export default function Rodape() {
  return (
    <footer style={estiloRodape}>
      <h2>Site criado com React</h2>
      <p style={{ color: "violet", fontWeight: "blod" }}>
        Desenvolvido por <b>Vanessa</b> &copy;2025{" "}
      </p>
    </footer>
  );
}
