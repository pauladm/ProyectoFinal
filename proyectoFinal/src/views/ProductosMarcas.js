import { useContext, useEffect, useState } from "react";
import { List, ListItem } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import "./Css/producto.css";
import usePagination from "../components/paginacion/Paginacion";
import * as React from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";

import Carga from "./Carga";

import { useAuthContext } from "../Context/AuthContext";

export default function ProductosMarcas() {
  const [page, setPage] = React.useState(1);

  const { auth } = useAuthContext();
  function addCart(name, price, imageUrl, id_p) {
    let http = new XMLHttpRequest();
    Swal.fire({
      title: "Selecciona tu talla",
      input: "select",
      inputOptions: {
        S: "S",
        M: "M",
        L: "L",
      },
    }).then((result) => {
      let datos = {
        producto: name,
        precio: price,
        imagen: imageUrl,
        talla: result.value,
        cantidad: "1",
        id_usuario: auth.id,
        id_producto: id_p,
      };
      http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          Swal.fire({ title: "se ha añadido al carro", icon: "success" });
        }
        /* if (
          this.responseText ===
          `err:ER_DUP_ENTRY: Duplicate entry '${user.email}' for key 'correo_UNIQUE'`
        ) {
          setErrorR("Error, email duplicado");
        } else {
          setErrorR("");
        }*/
      };

      http.open("POST", "http://localhost:8080/insertCart", true);
      http.setRequestHeader("Content-Type", "application/json");
      http.send(JSON.stringify(datos));
    });
    //let talla = prompt("Escoge tu talla");
    //let cantidad = prompt("Escoge la cantidad");
  }

  /* const [articulo, setArticulo] = useState({
    nombre: "",
    precio: "",
    imagen: "",
  });
  const { add } = useCarritoContext();
  function handleArticulo(name, price, img) {
    setArticulo({ nombre: name, precio: price, imagen: img });
    add(articulo);
  } */
  const { id } = useParams();

  const [productosMarcas, setProductosMarcas] = useState(null);
  useEffect(
    function () {
      async function data() {
        let response = await fetch(
          `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=27110&limit=90&country=US&sort=freshness&q=${id}&currency=USD&sizeSchema=US&lang=en-US`,
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
        console.log(productosMarcas);
      }

      data();
    },
    [id]
  );
  const PER_PAGE = 6;

  const _DATA = usePagination(productosMarcas, PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
    _DATA.jump(value);
  };
  if (!productosMarcas) {
    return <Carga />;
  }

  return (
    <div className="container">
      <List p="10" pt="3" spacing={2}>
        <div className="row">
          {_DATA.currentData().map((marca) => (
            <div className=" my-3  col-sm-6  ">
              <div class="shop-card">
                <div class="title">{marca.name}</div>
                <div class="desc">{marca.brandName}</div>
                <div class="slider">
                  <figure data-color="#E24938, #A30F22">
                    <img className="img1" src={"https://" + marca.imageUrl} />
                  </figure>
                </div>

                <div class="cta">
                  <div class="price">{marca.price.current.value + "€"}</div>
                  <button className="btn3 ">
                    <Link to={`/producto/${marca.id}`}>Mas detalles</Link>
                  </button>

                  <button
                    class="btn2 "
                    onClick={() =>
                      addCart(
                        marca.name,
                        marca.price.current.value,
                        marca.imageUrl,
                        marca.id
                      )
                    }
                  >
                    Add to cart<span class="bg"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <Stack spacing={2}>
            <Pagination
              className="text-ligth"
              count={_DATA.maxPage}
              size="large"
              page={page}
              variant="outlined"
              color="secondary"
              shape="rounded"
              onChange={handleChange}
            />
          </Stack>
        </div>
      </List>
    </div>
  );
}
