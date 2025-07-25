import logo from "../assets/logo-react.png";
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <img src={logo} alt="" /> Design
      </h1>
      <hr />

      <Menu />
    </header>
  );
}
