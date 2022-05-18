import { useContext, useEffect, useState, useLocation } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

import Swal from "sweetalert2";

import "./Css/detalles.css";
import "./Css/producto.css";
export default function Producto() {
  const [productosMarcas, setProductosMarcas] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { auth } = useAuthContext();
  function cruz() {
    document.getElementById(
      "eliminar"
    ).innerHTML = `<div id='cartel' class='alert alert-warning d-none alert-dismissible fade show' role='alert'> <strong>debes etsar registrado!</strong> '<button onClick=${cruz()} type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>`;
  }
  useEffect(
    function () {
      async function data() {
        let response = await fetch(
          `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`,
          {
            headers: {
              "X-RapidAPI-Host": "asos2.p.rapidapi.com",
              "X-RapidAPI-Key":
                "7cf7e6087cmshac381cb5533ecb9p1df698jsn823781244c80",
            },
          }
        );
        let json = await response.json();

        setProductosMarcas(json);
        console.log(productosMarcas);
      }
      data();
    },
    [id]
  );
  let talla = "s";
  function tallaselect() {
    Swal.fire({
      title: "Selecciona tu talla",
      input: "select",
      inputOptions: {
        S: "S",
        M: "M",
        L: "L",
      },
      inputPlaceholder: "Select country",
      showCancelButton: true,
      inputValidator: function (value) {
        return new Promise(function (resolve, reject) {
          resolve();
        });
      },
    }).then(function (result) {
      talla = result.value;
      console.log(result);
      Swal.fire({
        icon: "success",
        html: "You selected: " + result.value,
      });
    });
  }
  function addCart(name, price, imageUrl, id_p) {
    let http = new XMLHttpRequest();
    Swal.fire({
      title: "AÑADIDO AL CARRITO",

      icon: "success",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/carrito");
      }
    });

    let datos = {
      producto: name,
      precio: price,
      imagen: imageUrl,
      talla: talla,
      cantidad: "1",
      id_usuario: auth.id,
      id_producto: id_p,
    };
    http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
      }
    };

    http.open("POST", "http://localhost:8080/insertCart", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(datos));
  }

  if (!productosMarcas) {
    return <h1>cargandoo</h1>;
  }

  return (
    <div className="m-auto h-100  w-100">
      <div className="left">
        <img
          className="img1"
          src={"https://" + productosMarcas.media.images[0].url}
        />
        <i className="fa fa-long-arrow-left"></i>
        <i className="fa fa-long-arrow-right"></i>
      </div>
      <div className="right">
        <div className="product-info">
          <div className="product-name">
            <h1 className="h11">Detalles del producto</h1>
            <i className="fa fa-search"></i>
            <i className="fa fa-user"></i>
            <i className="fa fa-shopping-cart"></i>
          </div>

          <div className="details">
            <h3 className="h33">{productosMarcas.name}</h3>
            <h2 className="h33"> {productosMarcas.gender}</h2>
            <h4 className="h44">
              <span className="fa fa-dollar"></span>
              {productosMarcas.price.current.value + "  €"}
            </h4>
            <br />
            <h4 className="h44">Color: {productosMarcas.variants[0].colour}</h4>
          </div>

          <span className="foot">
            {!auth ? (
              <div id="eliminar">
                <div
                  id="cartel"
                  class="alert alert-warning d-flex alert-dismissible fade show"
                  role="alert"
                >
                  <Link className="enlace1" to={"/Iniciar"}>
                    debes estar registrado para comprar !
                  </Link>

                  <button
                    onClick={() => cruz()}
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => tallaselect()}
                  className="fa fa-shopping-bag btn4 enlace1"
                >
                  Selecciona tu talla
                </button>
                <button
                  onClick={() =>
                    addCart(
                      productosMarcas.name,
                      productosMarcas.price.current.value,
                      productosMarcas.media.images[0].url,
                      productosMarcas.id
                    )
                  }
                  className="enlace1"
                >
                  Comprar
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
