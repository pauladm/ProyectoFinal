import { createContext, useContext, useState } from "react";
import { useDatabaseContext } from "./Databasecontext";

const AuthContext = createContext({
  auth: {},
  login: () => {},
  errorMessage: "",
  setAuth: () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { usuarios } = useDatabaseContext();

  function login(user) {
    let v = false;
    console.log(user);
    for (const us of usuarios) {
      if (user.email == us.correo && user.password == us.password) {
        console.log(us);
        setAuth(us);
        v = true;
      }
    }
    if (v === false) {
      console.log("Error al introducir los credenciales");
    }
    return v;
  }
  const value = {
    auth,
    login,
    errorMessage,
    setAuth,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
