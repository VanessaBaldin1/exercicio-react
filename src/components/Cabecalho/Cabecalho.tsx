import logo from "../assets/logo-react.png";
import Menu from "../Menu/Menu";
import estilos from "../Cabecalho/Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={ estilos.toposite}>
      <h1 className={ estilos.titulo}>
        <img  className={ estilos.logo} src={logo} alt="" /> Design
      </h1>
      <hr />

      <Menu />
    </header>
  );
}
