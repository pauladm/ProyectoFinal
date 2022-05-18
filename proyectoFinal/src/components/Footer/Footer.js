import "../../views/Css/Css.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer ">
      <ul className="nav justify-content-center border-bottom">
        <li className="nav-item">
          <Link to="/Inicio" className="nav-link px-2 text-muted">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link px-2 text-muted">
            Contacto
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/preguntas" className="nav-link px-2 text-muted">
            Preguntas Frecuentes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SobreNosotros" className="nav-link px-2 text-muted">
            Sobre Nosotros
          </Link>
        </li>
      </ul>
      <p className=" footerText text-center text-muted">© 2021 Company, Inc</p>
    </footer>
  );
}
