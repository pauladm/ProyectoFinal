import Datos from "../components/Datos/Datos";
import "./Css/Css.css";
import { useLocation } from "react-router-dom";

export default function Home() {
  const x = useLocation();

  return (
    <div className="home">
      <h1 className="text-center traff">Trafficker 1</h1>

      <Datos />
    </div>
  );
}
