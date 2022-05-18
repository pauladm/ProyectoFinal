const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
app.use(express.static(path.join(__dirname, "ecommerce/public")));
const cors = require("cors");
const { dir } = require("console");
//Añadir si se va a usar el método POST
app.use(express.json());
app.use(cors());
function conectar() {
  let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pdm1821",
    database: "ropa",
  });

  connection.connect(function (err) {
    if (err) {
      return console.error("error ");
    }
  });
  return connection;
}
app.post("/carritounico", function (req, res) {
  let connection = conectar();
  console.log(req.body);
  let id_usuario = req.body.id_usuario;
  let id = req.body.id;
  connection.query(
    "select * from compra where id_usuario=? and id=?",
    [id_usuario, id],
    function (err, results, fields) {
      if (err) {
        res.send("error:" + err.message);
      } else {
        res.send(results);
      }
    }
  );
});
app.post("/MiLista", function (req, res) {
  let connection = conectar();
  console.log(req.body);
  let id_usuario = req.body.id_usuario;
  connection.query(
    "select * from metodo_de_pago where id_usuario=?",
    [id_usuario],
    function (err, results, fields) {
      if (err) {
        res.send("error:" + err.message);
      } else {
        res.send(results);
      }
    }
  );
});
app.post("/carrito", function (req, res) {
  let connection = conectar();
  console.log(req.body);
  let id_usuario = req.body.id_usuario;
  connection.query(
    "select * from compra where id_usuario=?",
    [id_usuario],
    function (err, results, fields) {
      if (err) {
        res.send("error:" + err.message);
      } else {
        res.send(results);
      }
    }
  );
});
app.get("/usuarios", function (req, res) {
  let connection = conectar();

  connection.query("select * from usuarios", function (err, results, fields) {
    if (err) {
      res.send("error:" + err.message);
    } else {
      res.send(results);
    }
  });
});

app.post("/userupdate", function (req, res) {
  let connection = conectar();
  console.log(req.body);
  let id = req.body.id;
  let name = req.body.usuarios;
  let lastName = req.body.lastName;
  let email = req.body.correo;
  let direccion = req.body.direccion;
  connection.query(
    "update  usuarios set usuarios=?,lastName=?,correo=?,direccion=? where id=?",
    [name, lastName, email, direccion, id],
    function (err, results) {
      if (err) {
        res.send("err:" + err.message);
      } else res.send("usuario actualizado");
    }
  );
});

app.post("/deleteCart", function (req, res) {
  let connection = conectar();
  console.log(req.body);
  let id_compra = req.body.id_compra;

  let cantidad = req.body.cantidad;
  connection.query(
    "delete from compra where id=?",
    [id_compra],

    function (err, results) {
      if (err) {
        res.send("err:" + err.message);
      } else res.send("eliminado");
    }
  );
});
app.post("/insertusuarios", function (req, res) {
  let connection = conectar();
  console.log(req.body);
  let name = req.body.name;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;
  let direccion = req.body.direccion;
  connection.query(
    "insert into usuarios(usuarios,lastName,correo,password,direccion) values(?,?,?,?,?)",
    [name, lastName, email, password, direccion],
    function (err, results) {
      if (err) {
        res.send("err:" + err.message);
      } else res.send("usuario insertado");
    }
  );
});

app.post("/insertCompra", function (req, res) {
  let connection = conectar();
  console.log(req.body);
  let producto = JSON.stringify(req.body.producto);
  let total = req.body.total;
  let num_tarjeta = req.body.num_tarjeta;
  let id_usuario = req.body.id_usuario;
  connection.query(
    "insert into metodo_de_pago(producto,precio,num_tarjeta,id_usuario) values(?,?,?,?)",
    [producto, total, num_tarjeta, id_usuario],
    function (err, results) {
      if (err) {
        res.send("err:" + err.message);
      } else res.send("pago realizado");
    }
  );
});
app.post("/insertCart", function (req, res) {
  let connection = conectar();
  console.log(req.body);
  let producto = req.body.producto;
  let precio = req.body.precio;
  let imagen = req.body.imagen;
  let id_usuario = req.body.id_usuario;
  let talla = req.body.talla;
  let id_producto = req.body.id_producto;

  let cantidad = req.body.cantidad;
  connection.query(
    "insert into compra(producto,total,imagen,talla,cantidad,id_usuario,id_producto) values(?,?,?,?,?,?,?)",
    [producto, precio, imagen, talla, cantidad, id_usuario, id_producto],
    function (err, results) {
      if (err) {
        res.send("err:" + err.message);
      } else res.send("completoo");
    }
  );
});
app.listen(8080);
