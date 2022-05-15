import zapasss from "./imagenes/zapasss.gif";
import "../views/Css/Css.css";
export default function Carga() {
  return (
    <div className=" container ">
      <div className="row">
        <img
          src={zapasss}
          className=" giff img1 card-img-top m-auto h-100"
          alt="..."
        />
      </div>
    </div>
  );
}
