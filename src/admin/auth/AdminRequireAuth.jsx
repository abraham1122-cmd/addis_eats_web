
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./authContext";

function AdminRequireAuth() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}

export default AdminRequireAuth;