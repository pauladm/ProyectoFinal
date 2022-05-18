import { useState, useEffect, useRef } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDatabaseContext } from "../Context/Databasecontext";

import "./Css/Css.css";
import Footer from "../components/Footer/Footer";
export default function Registro() {
  const { login, errorMessage } = useAuthContext();
  const { register, errorR } = useDatabaseContext();
  const location = useLocation();
  const navigate = useNavigate();
  const userRef = useRef();
  const from = location.state?.from?.pathname || "/";
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    direccion: "",
  });

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    register(user);
  }
  return (
    <div className=" Iniciar auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          {errorR && <p className="text-danger">{errorR}</p>}

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="First name"
              className="form-control"
              id="name"
              name="name"
              ref={userRef}
              autoComplete="off"
              onChange={handleInputs}
              value={user.name}
              required
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              id="lastName"
              name="lastName"
              ref={userRef}
              autoComplete="off"
              onChange={handleInputs}
              value={user.lastName}
              required
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              name="email"
              ref={userRef}
              autoComplete="off"
              onChange={handleInputs}
              value={user.email}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="password"
              name="password"
              ref={userRef}
              autoComplete="off"
              onChange={handleInputs}
              value={user.password}
              required
            />
          </div>
          <div className="form-group">
            <label>direccion</label>
            <input
              type="text"
              className="form-control"
              placeholder="direccion"
              id="direccion"
              name="direccion"
              ref={userRef}
              autoComplete="off"
              onChange={handleInputs}
              value={user.direccion}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/Iniciar">sign in?</Link>
          </p>
          <p className="forgot-password text-right">
            <Link to="/Inicio"> Continuar sin registrarse</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
