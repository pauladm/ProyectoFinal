import { useEffect, useState } from "react";
import "../../views/Css/Css.css";
import { Link } from "react-router-dom";
import zapas from "./images/zapas.png";
import sudaderas from "./images/sudaderas.jpg";
import pantalones from "./images/pantalones.jpg";
import chico from "../../views/imagenes/chico.jpg";
import chica from "../../views/imagenes/chica.jpg";
import trabimg from "../../views/imagenes/trabimg.jpg";
import banner11 from "../../views/imagenes/banner11.png";
import nikelogo from "../../views/imagenes/nikelogo.png";
import filalogo from "../../views/imagenes/filalogo.jpg";
import VansLogo from "../../views/imagenes/VansLogo.png";
import Cklogo from "../../views/imagenes/Cklogo.png";
import AdidasLogo from "../../views/imagenes/AdidasLogo.png";

//import { Link } from "react-router-dom";
export default function Datos() {
  const [datos, setDatos] = useState([]);
  useEffect(function () {
    async function data() {
      let response = await fetch(
        "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=3&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
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
      setDatos(json);
    }
    data();
  }, []);
  if (!datos) {
    return (
      <div>
        <h1>cargando</h1>
      </div>
    );
  }
  let x = "https://";
  return (
    /* <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide  m-auto w-50 car "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            className="btn-dark"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel1 carousel-inner  border border-primary rounded ">
          <div className="carousel-item active">
            <img
              src={pantalones}
              className=" marco  fotoc card-img-top "
              alt="..."
            />

            <div className="carousel-caption d-none d-md-block ">
              <h5 className="carruself">Novedades Todos los dias</h5>
            </div>
          </div>
          <div className="carousel1 carousel-item">
            <img
              src={sudaderas}
              className=" marco fotoc card-img-top"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carruself">Preparate para ir a la moda</h5>
            </div>
          </div>

          <div className="carousel1 carousel-item">
            <img src={zapas} className=" marco fotoc card-img-top " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carruself">Define tu estilo!</h5>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>*/
    <div class="album py-5 ">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img
                class="marco card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                style={{ height: "100%", width: "100%", display: "block" }}
                src={chico}
                data-holder-rendered="true"
              />
              <div class="card-body">
                <p class="card-text">
                  Las mejores marcas de moda deportiva y urbana se reúnen aquí
                  para que puedas ver todas las novedades disponibles en un
                  único lugar. La ropa de marca en su vertiente más sport y
                  streetwear también está disponible en esta colección de hombre
                  de Trafficker 1 Sports
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group mx-auto">
                    <Link
                      to={`/productos/man`}
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Ropa de Hombre
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img
                class="marco card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src={chica}
                data-holder-rendered="true"
                style={{ height: "100%", width: "100%", display: "block" }}
              />
              <div class="card-body">
                <p class="card-text">
                  En Trafficker 1 somos expertos en moda urbana y deportiva. Es
                  por eso que en la colección de ropa de mujer solo encontrarás
                  lo mejor de las mejores marcas, tanto las más famosas y
                  clásicas del mercado como las más recientes que están dando
                  que hablar.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group mx-auto">
                    <Link
                      to={`/productos/girl`}
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Ropa mujer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img
                class=" marco card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Thumbnail [100%x225]"
                src={trabimg}
                data-holder-rendered="true"
                style={{ height: "100%", width: "100%", display: "block" }}
              />
              <div class="card-body">
                <p class="card-text">
                  Mochilas, guantes, bolsas de deporte... completa ya tus
                  ‘outfits’ con lo mejor de Fila, Nike y adidas Originals entre
                  otras. Y es que Trafficker 1 no es solo moda deportiva.
                  Encuentra también una gran variedad de accesorios y no pierdas
                  ese toque especial que te hará destacar entre la multitud.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group mx-auto">
                    <Link
                      to={`/productos/accessory`}
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Accesorios Hombre y mujer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="banner1 my-5" src={banner11}></img>
          </div>

          <div className="Logoss my-5">
            <ul>
              <li className="logoss">
                <Link to="/productos/Nike">
                  <img src={nikelogo} />
                </Link>
              </li>
              <li className="logoss">
                <Link to="/productos/Fila">
                  <img src={filalogo} />
                </Link>
              </li>
              <li className="logossV">
                <Link to="/productos/Vans">
                  <img src={VansLogo} />
                </Link>
              </li>
              <li className="logossA">
                <Link to="/productos/Adidas">
                  <img src={AdidasLogo} />
                </Link>
              </li>
              <li className="logossCK">
                <Link to="/productos/Calvin%20Klein">
                  <img src={Cklogo} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    //</>
  );
}
