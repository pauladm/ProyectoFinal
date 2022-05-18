import { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const DatabaseContext = createContext({
  usuarios: [],
  setUsuarios: () => {},
  register: () => {},
  errorR: "",
});

export const useDatabaseContext = () => {
  return useContext(DatabaseContext);
};

export default function DatabaseContextProvider({ children }) {
  const [usuarios, setUsuarios] = useState(null);
  const [errorR, setErrorR] = useState("");
  const navigate = useNavigate();
  useEffect(function () {
    function callUsuarios() {
      let http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          setUsuarios(JSON.parse(this.responseText));
        }
      };
      http.open("GET", "http://localhost:8080/usuarios", true);
      http.send();
    }
    callUsuarios();
  }, []);

  function register(user) {
    console.log(user);
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        if (
          this.responseText ===
          `err:ER_DUP_ENTRY: Duplicate entry '${user.email}' for key 'correo_UNIQUE'`
        ) {
          setErrorR("Error, email duplicado");

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email Duplicado!",
          });
        } else {
          setErrorR("");
          Swal.fire({
            title: "Bienvenido!",
            text: " completado con éxito",
            icon: "success",
            allowOutsideClick: false,
          }).then((result) => navigate("/Iniciar"));
        }
      }
    };
    http.open("POST", "http://localhost:8080/insertusuarios", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(user));
  }

  const value = {
    usuarios,
    setUsuarios,
    register,
    errorR,
  };
  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}
