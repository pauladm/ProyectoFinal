import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
export default function Editar() {
  const { auth, setAuth } = useAuthContext();
  const navigate = useNavigate();

  let [datoCopia, setDatoCopia] = useState({
    id: auth.id,
    usuarios: auth.usuarios,
    correo: auth.correo,
    lastName: auth.lastName,
    direccion: auth.direccion,
    password: auth.password,
  });
  function handleInputs(e) {
    setDatoCopia({ ...datoCopia, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    let http = new XMLHttpRequest();
    console.log(auth);
    let data = datoCopia;
    http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setAuth(datoCopia);
        navigate("/Perfil");
      }
    };
    http.open("POST", "http://localhost:8080/userupdate", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(data));
  }
  return (
    <div className="m-auto">
      <div class="container emp-profile">
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head">
                <h5>{auth.usuarios}</h5>

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      to="/editar"
                    >
                      Editar perfil
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <input
                type="submit"
                class="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
                <Link to="/Milista">Mi lista </Link>

                <br />
              </div>
            </div>
            <div class="col-md-8">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>
                        <input
                          name="usuarios"
                          type="text"
                          onChange={handleInputs}
                          value={datoCopia.usuarios}
                        ></input>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Apellido</label>
                    </div>
                    <div class="col-md-6">
                      <p>
                        <input
                          type="text"
                          name="lastName"
                          onChange={handleInputs}
                          value={datoCopia.lastName}
                        ></input>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>

                    <div class="col-md-6">
                      <input
                        type="text"
                        onChange={handleInputs}
                        name="correo"
                        value={datoCopia.correo}
                      ></input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Direccion</label>
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="direccion"
                        onChange={handleInputs}
                        value={datoCopia.direccion}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button>Guardar cambios</button>
        </form>
      </div>
    </div>
  );
}
