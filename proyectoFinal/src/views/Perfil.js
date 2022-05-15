import { useAuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import "./Css/Profile.css";
export default function Perfil() {
  const { auth } = useAuthContext();
  return (
    <div className="m-auto">
      <div class="container emp-profile">
        <form method="post">
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
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Mi perfil
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2">
              <Link to="/editar">
                <input
                  type="submit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Editar perfil"
                />
              </Link>
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
                        {auth.usuarios}
                        {auth.lastName}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{auth.correo}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Direccion</label>
                    </div>
                    <div class="col-md-6">
                      <p>{auth.direccion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
