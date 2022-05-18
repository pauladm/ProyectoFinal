import "./Css/producto.css";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, Link, useParams } from "react-router-dom";
import bañadorCck from "./imagenes/bañadorCck.jpg";
import shortnike from "./imagenes/shortnike.jpg";
import camisetas from "./imagenes/camisetas.jpg";
import sudaderack from "./imagenes/sudaderack.jpg";
import tenis from "./imagenes/tenis.jpg";
import jeans from "./imagenes/jeans.jpg";
export default function ParaTi() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productosMarcas, setProductosMarcas] = useState(null);
  const [checked, setChecked] = useState([]);
  let filtro = ["cap"];
  let gorra = document.getElementById("gorrach");
  function AddCheck() {
    filtro.push("cap");
  }
  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    console.log(updatedList);
  };
  function handleSubmit(e) {
    e.preventDefault();
    let search = "";
    for (const x of checked) {
      search += x;
    }
    navigate(`/productos/${search}`);
  }
  useEffect(function () {
    async function data() {
      let check = "";

      if (gorra) {
        check += "cap&";
      }

      let response = await fetch(
        `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=27110&limit=48&country=US&sort=freshness&q=${check}&currency=USD&sizeSchema=US&lang=en-US`,
        {
          headers: {
            "X-RapidAPI-Host": "asos2.p.rapidapi.com",
            "X-RapidAPI-Key":
              "7cf7e6087cmshac381cb5533ecb9p1df698jsn823781244c80",
          },
        }
      );
      let json = await response.json();
      json = json.products;

      setProductosMarcas(json);
    }
    data();
  }, []);

  return (
    <section className=" m-auto">
      <div className=" container  py-5">
        <h4 className="text-center mb-5">
          <strong>Product listing</strong>
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-44">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src={`${bañadorCck}`} className="w-100" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                          <Link to={`/productos/swimwear`} class="">
                            Bañadores
                          </Link>
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-44">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src={`${shortnike}`} className="w-100" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                          <Link to={`/productos/shorts`} class="">
                            Pantalones cortos
                          </Link>
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-44">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src={`${sudaderack}`} className="w-100" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                          <Link to={`/productos/Hoddies`} class="">
                            Sudaderas
                          </Link>
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-44">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded ripple-surface">
                <img src={`${camisetas}`} className="w-100" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                          <Link to={`/productos/T-shirts`} class="">
                            camisetas
                          </Link>
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-44">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src={`${tenis}`} className="w-100" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                          <Link to={`/productos/Sneaker`} class="">
                            Tenis
                          </Link>
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-44">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src={`${jeans}`} className="w-100" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                          <Link to={`/productos/jeans`} class="">
                            Vaqueros
                          </Link>
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
