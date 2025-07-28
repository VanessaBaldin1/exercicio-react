import { Link, useLocation } from "react-router-dom";
import estilos from "../Menu/Menu.module.css";

const Menu = () => {
  const location = useLocation();

  {
    return (
      <nav className={estilos.nav}>
        <ul className={estilos.navList}>
          <li className={estilos.navItem}>
            <Link
              to="/"
              className={`${estilos.link} ${
                location.pathname === "/" ? estilos.active : " "
              }`}
            >
              Home
            </Link>
          </li>
          <li className={estilos.navItem}>
            <Link
              to="/sobre"
              className={`${estilos.link} ${
                location.pathname === "/sobre" ? estilos.active : " "
              }`}
            >
              Sobre
            </Link>
          </li>
          <li className={estilos.navItem}>
            <Link
              to="/tipos-de-design"
              className={`${estilos.link} ${
                location.pathname === "/tipos-de-design" ? estilos.active : " "
              }`}
            >
              Tipos de Design
            </Link>
          </li>
          <li className={estilos.navItem}>
            <Link
              to="/ux-design"
              className={` ${estilos.link} ${
                location.pathname === "/ux-design" ? estilos.active : " "
              }`}
            >
              Ux Design
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Menu;
