import {
  Outlet,
  NavLink,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Footer from "./Footer/Footer";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarraMenu from "./BarraMenu/BarraMenu";
import "../views/Css/Css.css";
import Milogo from "../views/imagenes/Milogo.png";
export default function Layaout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuthContext();
  function handleLogOut() {
    setAuth(null);
    navigate("/Iniciar");
  }
  function cartel() {
    document.getElementById("cartel").classList.remove("d-none");
    document.getElementById("cartel").classList.add("d-flex");
  }
  function cruz() {
    document.getElementById(
      "eliminar"
    ).innerHTML = `<div id='cartel' class='alert alert-warning d-none alert-dismissible fade show' role='alert'> <strong>debes etsar registrado!</strong> '<button onClick=${cruz()} type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>`;
  }

  const x = useLocation();
  return (
    <>
      <nav className=" zeta  navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="Inicio">
            <img className="milogo " src={Milogo}></img>
          </NavLink>
          {!auth && (
            <>
              <div
                className="collapse navbar-collapse "
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <NoAccountsIcon />
                    </a>
                    <ul
                      className=" dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <NavLink to="/registro" className="dropdown-item">
                          Registro
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Iniciar" className="dropdown-item">
                          Iniciar sesion
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          )}

          {auth && (
            <>
              <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <AccountCircleIcon />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item" to="/perfil">
                          Ver Perfil
                        </Link>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => handleLogOut()}
                        >
                          Cerrar sesion
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <a>
                <Link to="/carrito">
                  <ShoppingCartIcon color="primary" />
                </Link>
              </a>
            </>
          )}
        </div>
      </nav>
      <main className="App ">
        <div
          className={
            x.pathname == "/SobreNosotros"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/Adidas"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/Nike"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/Fila"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/Calvin%20Klein"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/Vans"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/accessory"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/man"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/girl"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/Iniciar"
              ? "d-flex justify-content-between h-100"
              : x.pathname == "/para-ti"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/Registro"
              ? "d-flex justify-content-between h-100"
              : x.pathname == "/carrito"
              ? "d-flex justify-content-between h-100"
              : x.pathname == "/productos/swimwear"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/shorts"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/Sneaker"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/Hoddies"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/productos/T-shirts"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/Inicio"
              ? "d-flex justify-content-between h-90"
              : x.pathname == "/MiLista"
              ? "d-flex justify-content-between h-100"
              : "d-flex justify-content-between h-100"
          }
        >
          <BarraMenu />
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}
