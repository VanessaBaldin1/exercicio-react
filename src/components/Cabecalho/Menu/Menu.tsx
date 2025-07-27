import { Link } from 'react-router-dom';
import estilos from "../Menu/Menu.module.css";


export default function Menu() {
  return (
    <nav className={estilos.nav}>
      <ul className={estilos.navList}>
        <li className={estilos.navItem}>
          <Link to="/" className={estilos.link}>Home</Link>
        </li>
        <li className={estilos.navItem}>
          <Link to="/sobre" className={estilos.link}>Sobre</Link>
        </li>
        <li className={estilos.navItem}>
          <Link to="/tipos-de-design" className={estilos.link}>Tipos de Design</Link>
        </li>
        <li className={estilos.navItem}>
          <Link to="/ux-design" className={estilos.link}>Ux Design</Link>
        </li>
      </ul>
    </nav>
  );
}