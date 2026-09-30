


import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/authContext";

import "./admin.css";

function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    const confirmLogout = window.confirm("sure! want to leave this page?");

   if(confirmLogout){
    logout();
    navigate("/admin/login");

   }

  }

  return (
    <div className="admin-layout">

  
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Addis Eats</h2>
          <p>Admin Panel</p>
        </div>

        <nav className="admin-nav">

          <NavLink to="/admin/dashboard">
            Dashboard
          </NavLink>

          <NavLink to="/admin/dishes">
            Dishes
          </NavLink>

          <NavLink to="/admin/orders">
            Orders
          </NavLink>

        </nav>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </aside>

   
      <div className="admin-main">

      
        <header className="admin-header">
          <h1>Admin Dashboard</h1>

          <div className="admin-user">
            <span>Administrator</span>
          </div>
        </header>

       
        <main className="admin-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;