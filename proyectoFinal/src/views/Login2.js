import { useState, useEffect, useRef } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Css/Css.css";
export default function Login2() {
  const { login, errorMessage } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const userRef = useRef();
  const from = location.state?.from?.pathname || "/";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    let x = login(user);
    setUser({ email: "", password: "" });
    if (x) {
      navigate("/home");
    } else navigate("/Login2");
  }
  return (
    <div className=" Login2 auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              className="form-control"
              type="text"
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
              className="form-control"
              type="password"
              id="password"
              name="password"
              onChange={handleInputs}
              value={user.password}
              required
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>

          <p className="forgot-password text-right">
            Todavia no estas registrado?
            <Link to="/Registro">registrate</Link>
          </p>
          <p className="forgot-password text-right">
            <Link to="/home"> </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
