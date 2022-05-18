import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
export default function RequireAuth() {
  const { auth } = useAuthContext();
  const location = useLocation();
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/Iniciar" state={{ from: location }} replace></Navigate>
  );
}
