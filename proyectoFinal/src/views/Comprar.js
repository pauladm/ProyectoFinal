import "./Css/comprar.css";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import $ from "jquery";
import Carga from "./Carga";
export default function Comprar() {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState(null);
  const { id } = useParams();
  const [n, setN] = useState(0);
  const { auth } = useAuthContext();
  const [datosCompra, setDatosCompra] = useState({
    id_usuario: auth.id,
    num_tarjeta: "",
    total: "",
    producto: [],
  });

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

  function handleSubmit(e) {
    e.preventDefault();
    let http = new XMLHttpRequest();
    Swal.fire("Good job!", "You clicked the button!", "success").then(
      (result) => {
        if (result.isConfirmed) {
          navigate("/milista");
        }
      }
    );
    for (const producto of carrito) {
      datosCompra.producto.push({
        producto: producto.producto,
        id_producto: producto.id_producto,
        imagen: producto.imagen,
        talla: producto.talla,
      });
    }
    datosCompra.total = total;
    http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
      }
    };

    http.open("POST", "http://localhost:8080/insertCompra", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(datosCompra));
  }

  function handleImput(e) {
    setDatosCompra({ ...datosCompra, [e.target.name]: e.target.value });
  }

  $(document).ready(function () {
    var cardNum = document.getElementById("cr_no");
    cardNum.onkeyup = function (e) {
      if (this.value == this.lastValue) return;
      var caretPosition = this.selectionStart;
      var sanitizedValue = this.value.replace(/[^0-9]/gi, "");
      var parts = [];

      for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
        parts.push(sanitizedValue.substring(i, i + 4));
      }

      for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < "0" || c > "9") {
          caretPosition--;
        }
      }
      caretPosition += Math.floor(caretPosition / 4);

      this.value = this.lastValue = parts.join("-");
      this.selectionStart = this.selectionEnd = caretPosition;
    };

    //For Date formatted input
    var expDate = document.getElementById("exp");
    expDate.onkeyup = function (e) {
      if (this.value == this.lastValue) return;
      var caretPosition = this.selectionStart;
      var sanitizedValue = this.value.replace(/[^0-9]/gi, "");
      var parts = [];

      for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
        parts.push(sanitizedValue.substring(i, i + 2));
      }

      for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < "0" || c > "9") {
          caretPosition--;
        }
      }
      caretPosition += Math.floor(caretPosition / 2);

      this.value = this.lastValue = parts.join("/");
      this.selectionStart = this.selectionEnd = caretPosition;
    };

    // Radio button
    $(".radio-group .radio").click(function () {
      $(this).parent().find(".radio").removeClass("selected");
      $(this).addClass("selected");
    });
  });
  if (!auth) {
    return <Carga> </Carga>;
  }
  if (!carrito) {
    return <Carga />;
  }
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].cantidad * carrito[i].total;
  }
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-11">
          <div class="card card0 rounded-0">
            <div class="row">
              <div class="col-md-5 d-md-block d-none p-0 box">
                <div class="card rounded-0 border-0 card1" id="bill">
                  <h3 id="heading1">Payment Summary</h3>
                  {carrito.map((producto) => (
                    <div class="row">
                      <div class="col-lg-7 col-8 mt-4 line pl-4">
                        <h2 class="bill-head">{producto.producto}</h2>
                        <small class="bill-date">{producto.total + "€"}</small>
                      </div>
                      <img
                        className="m-auto w-25"
                        src={"https://" + producto.imagen}
                      ></img>
                    </div>
                  ))}

                  <div class="row">
                    <div class="col1 ">
                      <p class="bill-date" id="total-label">
                        Total Price
                      </p>
                      <h2 class="bill-head" id="total">
                        {total + "€"}
                      </h2>
                      <small class="bill-date" id="total-label">
                        Price includes all taxes
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-7 col-sm-12 p-0 box">
                <div class="card rounded-0 border-0 card2" id="paypage">
                  <div class="form-card">
                    <h2 id="heading2" class="text-danger">
                      Payment Method
                    </h2>
                    <div class="radio-group">
                      <div class="radio" data-value="credit">
                        <img
                          src="https://i.imgur.com/28akQFX.jpg"
                          width="200px"
                          height="60px"
                        />
                      </div>
                      <div class="radio" data-value="paypal">
                        <img
                          src="https://i.imgur.com/5QFsx7K.jpg"
                          width="200px"
                          height="60px"
                        />
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <label class="pay">Name on Card</label>
                      <input
                        type="text"
                        name="holdername"
                        placeholder="John Smith"
                      />
                      <div class="row">
                        <div class="col-8 col-md-6">
                          <label class="pay">Card Number</label>
                          <input
                            type="text"
                            name="num_tarjeta"
                            id="cr_no"
                            placeholder="0000-0000-0000-0000"
                            minlength="19"
                            maxlength="19"
                            onChange={handleImput}
                          />
                        </div>
                        <div class="col-4 col-md-6">
                          <label class="pay">CVV</label>
                          <input
                            type="password"
                            name="cvcpwd"
                            placeholder="&#9679;&#9679;&#9679;"
                            class="placeicon"
                            minlength="3"
                            maxlength="3"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <label class="pay">Expiration Date</label>
                        </div>
                        <div class="col-md-12">
                          <input
                            type="text"
                            name="exp"
                            id="exp"
                            placeholder="MM/YY"
                            minlength="5"
                            maxlength="5"
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <input
                            type="submit"
                            value="Realizar pago &nbsp; &#xf178;"
                            class="btn btn-info placeicon"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
