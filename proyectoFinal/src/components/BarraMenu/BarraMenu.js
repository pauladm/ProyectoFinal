import "../../views/Css/Barracss.css";
import { useAuthContext } from "../../Context/AuthContext";
import { Marcas } from "../../views/Api";
import { NavLink, Link } from "react-router-dom";
import ProductosMarcas from "../../views/ProductosMarcas";

export default function BarraMenu() {
  const { auth } = useAuthContext();
  return (
    <nav
      className="navbar navbar-inverse barralateral"
      id="sidebar-wrapper"
      role="navigation"
    >
      <ul className=" opac nav sidebar-nav ">
        {!auth ? (
          <>
            <div className="sidebar-header">
              <div className="sidebar-brand">
                <a href="#">ANIMATE</a>
              </div>
            </div>

            <li>
              <div className="navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="
                    dropdown-toggle"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Marcas
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <Link
                          to={`/productos/${Marcas[0]}`}
                          className="dropdown-item"
                        >
                          {Marcas[0]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/productos/${Marcas[1]}`}
                          className="dropdown-item"
                        >
                          {Marcas[1]}
                        </Link>
                      </li>

                      <li>
                        <Link
                          to={`/productos/${Marcas[2]}`}
                          className="dropdown-item"
                        >
                          {Marcas[2]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/productos/${Marcas[3]}`}
                          className="dropdown-item"
                        >
                          {Marcas[3]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/productos/${Marcas[4]}`}
                          className="dropdown-item"
                        >
                          {Marcas[4]}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/para-ti">Para ti !</Link>
            </li>

            <li className="dropdown">
              <ul className="dropdown-menu animated fadeInLeft" role="menu">
                <div className="dropdown-header">Dropdown heading</div>
              </ul>
            </li>

            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </>
        ) : (
          <>
            <div className="sidebar-header">
              <div className="sidebar-brand">
                <a href="#">ANIMATE</a>
              </div>
            </div>

            <li>
              <div className="navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="
                       dropdown-toggle"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Marcas
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <Link
                          to={`/productos/${Marcas[0]}`}
                          className="dropdown-item"
                        >
                          {Marcas[0]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/productos/${Marcas[1]}`}
                          className="dropdown-item"
                        >
                          {Marcas[1]}
                        </Link>
                      </li>

                      <li>
                        <Link
                          to={`/productos/${Marcas[2]}`}
                          className="dropdown-item"
                        >
                          {Marcas[2]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/productos/${Marcas[3]}`}
                          className="dropdown-item"
                        >
                          {Marcas[3]}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/productos/${Marcas[4]}`}
                          className="dropdown-item"
                        >
                          {Marcas[4]}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/para-ti">Para ti !</Link>
            </li>

            <li className="dropdown">
              <ul className="dropdown-menu animated fadeInLeft" role="menu">
                <div className="dropdown-header">Dropdown heading</div>
              </ul>
            </li>

            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
