import { createContext, useContext, useState } from "react";

const CarritoContext = createContext({
  guardar: [],
  setGuardar: () => {},
  add: () => {},
});

export const useCarritoContext = () => {
  return useContext(CarritoContext);
};

export default function CarritoContextProvider({ children }) {
  const [guardar, setGuardar] = useState([]);

  function add(guarda) {
    setGuardar([...guardar, guarda]);
    console.log(guardar);
  }
  const value = { guardar, setGuardar, add };
  return (
    <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>
  );
}
