import "../views/Css/Carrito.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCarritoContext } from "../Context/CarritoContext";
import { useAuthContext } from "../Context/AuthContext";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import Carga from "./Carga";

export default function Carrito() {
  const [n, setN] = useState(0);
  const { auth } = useAuthContext();
  const { guardar } = useCarritoContext();
  const [carrito, setCarrito] = useState(null);
  function handleDelete(id) {
    let http = new XMLHttpRequest();
    let data = { id_compra: id };
    http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setN(n + 1);
      }
    };
    http.open("POST", "http://localhost:8080/deleteCart", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(data));
  }
  useEffect(
    function () {
      function callCarrito() {
        let http = new XMLHttpRequest();

        console.log(auth);
        let data = { id_usuario: auth.id };
        http.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            setCarrito(JSON.parse(this.responseText));
          }
        };
        http.open("POST", "http://localhost:8080/carrito", true);
        http.setRequestHeader("Content-Type", "application/json");
        http.send(JSON.stringify(data));
      }
      callCarrito();
    },
    [auth, n]
  );

  if (!auth) {
    return <Carga></Carga>;
  }
  if (!carrito) {
    return <Carga />;
  }
  return (
    <div className="cart-container m-auto">
      <p className="cart-title">
        Your <strong>Cart</strong>
      </p>

      <table className="table text-light ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">imagen</th>
            <th scope="col">Producto</th>
            <th scope="col">precio</th>

            <th scope="col">talla</th>
            <th scope="col">Eliminar</th>
            <th scope="col">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((marca) => (
            <tr>
              <td>
                <img
                  className="m-auto w-25"
                  src={"https://" + marca.imagen}
                ></img>
              </td>
              <td>{marca.producto}</td>
              <td>{marca.total}</td>
              <td>{marca.talla}</td>
              <td>
                <button
                  onClick={() => handleDelete(marca.id)}
                  className="btn text-light"
                >
                  <HighlightOffRoundedIcon />
                </button>
              </td>
              <td>{marca.cantidad}</td>
              <Link to={`/compraunica/${marca.id}`}>Comprar</Link>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/comprar" className="btn btn-primary">
        COMPRAR TODO
      </Link>
    </div>
  );
}
