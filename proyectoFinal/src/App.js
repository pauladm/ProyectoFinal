import { Routes, Route } from "react-router-dom";
import Layaout from "./components/Layout";
import Home from "./views/Home";
import Error from "./views/Error";

import RequireAuth from "./components/RequireAuth/RequireAuth";
import Ajustes from "./views/Ajustes";
import Login2 from "./views/Login2";
import Paginacion from "./components/paginacion/Paginacion";
import Registro from "./views/Registro";
import Datos from "./components/Datos/Datos";

import About from "./views/About";
import Preguntas from "./views/Preguntas";
import Contacto from "./views/Contacto";
import ProductosMarcas from "./views/ProductosMarcas";
import Producto from "./views/Producto";
import Parati from "./views/Parati";
import Carrito from "./views/Carrito";
import Comprar from "./views/Comprar";
import Compraunica from "./views/compraunica";
import Perfil from "./views/Perfil";
import Editar from "./views/Editar";
import Milista from "./views/Milista";
function App() {
  return (
    <Routes>
      {/*public routes */}

      <Route path="/" element={<Layaout />}>
        <Route path="home" element={<Home />} />

        <Route path="login2" element={<Login2 />} />
        <Route path="paginacion" element={<Paginacion />} />
        <Route path="registro" element={<Registro />} />
        <Route path="datos" element={<Datos />} />
        <Route path="preguntas" element={<Preguntas />} />
        <Route path="contacto" element={<Contacto />} />

        <Route path="about" element={<About />} />

        <Route path="*" element={<Error />} />
        <Route path="productos/:id" element={<ProductosMarcas />} />
        <Route path="producto/:id" element={<Producto />} />
        <Route path="para-ti" element={<Parati />} />
        <Route element={<RequireAuth />}>
          <Route index element={<Home />} />
          <Route path="paginacion" element={<Paginacion />} />
          <Route path="ajustes" element={<Ajustes />} />
          <Route path="comprar" element={<Comprar />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="compraunica/:id" element={<Compraunica />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="milista" element={<Milista />} />
          <Route path="editar" element={<Editar />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
