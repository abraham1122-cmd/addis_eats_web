import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";
import {Link} from "react-router-dom";

function AdminLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { Login } = useAuth();
  const navigate = useNavigate();

  function HandleSubmit(e) {
    e.preventDefault();

    if (!userName || !password) {
      setError("Please enter username and password");
      return;
    }

    const success = Login(userName, password);

    if (success) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <section className="admin-login">
      {/* <h2>Admin Login</h2> */}

      <form onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="username">Username</label>

          <input
            type="text"
            name="userName"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">
          Login
        </button>
         <Link to="/">Back to Home</Link>
      </form>
     
    </section>
  );
}

export default AdminLogin;