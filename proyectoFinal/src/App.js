import { Routes, Route } from "react-router-dom";
import Layaout from "./components/Layout";
import Inicio from "./views/Inicio";
import Error from "./views/Error";

import RequireAuth from "./components/RequireAuth/RequireAuth";
import Ajustes from "./views/Ajustes";
import Iniciar from "./views/Iniciar";
import Paginacion from "./components/Paginacion/Paginacion";
import Registro from "./views/Registro";
import Datos from "./components/Datos/Datos";

import SobreNosotros from "./views/SobreNosotros";
import Preguntas from "./views/Preguntas";
import Contacto from "./views/Contacto";
import ProductosMarcas from "./views/ProductosMarcas";
import Producto from "./views/Producto";
import ParaTi from "./views/ParaTi";
import Carrito from "./views/Carrito";
import Comprar from "./views/Comprar";
import CompraUnica from "./views/CompraUnica";
import Perfil from "./views/Perfil";
import Editar from "./views/Editar";
import MiLista from "./views/MiLista";
function App() {
  return (
    <Routes>
      {/*public routes */}

      <Route path="/" element={<Layaout />}>
        <Route path="Inicio" element={<Inicio />} />

        <Route path="Iniciar" element={<Iniciar />} />
        <Route path="Paginacion" element={<Paginacion />} />
        <Route path="registro" element={<Registro />} />
        <Route path="datos" element={<Datos />} />
        <Route path="preguntas" element={<Preguntas />} />
        <Route path="contacto" element={<Contacto />} />

        <Route path="SobreNosotros" element={<SobreNosotros />} />

        <Route path="*" element={<Error />} />
        <Route path="productos/:id" element={<ProductosMarcas />} />
        <Route path="producto/:id" element={<Producto />} />
        <Route path="para-ti" element={<ParaTi />} />
        <Route element={<RequireAuth />}>
          <Route index element={<Inicio />} />
          <Route path="Paginacion" element={<Paginacion />} />
          <Route path="ajustes" element={<Ajustes />} />
          <Route path="comprar" element={<Comprar />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="CompraUnica/:id" element={<CompraUnica />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="MiLista" element={<MiLista />} />
          <Route path="editar" element={<Editar />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
