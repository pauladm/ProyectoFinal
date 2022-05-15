import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCarritoContext } from "../Context/CarritoContext";
import { useAuthContext } from "../Context/AuthContext";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import "./Css/Css.css";
import Carga from "./Carga";
export default function Milista() {
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
            let x = JSON.parse(this.responseText);
            let j = [];

            for (let y of x) {
              let h = JSON.parse(y.producto);
              j = [];
              for (let z of h) {
                j.push(z);
                y.producto = j;
              }
              console.log(x);
            }
            setCarrito(x);
          }
        };
        http.open("POST", "http://localhost:8080/Milista", true);
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
        Mi<strong>Lista</strong>
      </p>

      <table className="table text-light ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">productos</th>
            <th scope="col">Precio</th>
            <th> talla</th>
            <th scope="col">detalles</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((marca) => (
            <tr>
              <td>
                {marca.producto.map((detalle) => (
                  <p>
                    <img
                      className=" milistafot m-auto"
                      src={"https://" + detalle.imagen}
                    ></img>{" "}
                    {detalle.producto}
                  </p>
                ))}
              </td>
              <td>{marca.precio}</td>
              <td>
                {marca.producto.map((detalle) => (
                  <p>{detalle.talla}</p>
                ))}
              </td>
              <td>
                {marca.producto.map((detalle) => (
                  <p>
                    <Link to={`/producto/${detalle.id_producto}`}>
                      Detalles del producto
                    </Link>
                  </p>
                ))}
              </td>

              <td>{marca.cantidad}</td>
              <Link to={"/carrito"}>Comprar de nuevo</Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
