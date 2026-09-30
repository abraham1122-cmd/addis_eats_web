

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login({setIsAuthenticated}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
   
  
    
    if (email === "addisuser@gmail.com" && password === "098765") {
        
          setIsAuthenticated(true);
     

     
      const from = location.state?.from?.pathname || "/";

      navigate(from, { replace: true });
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <form className="usersign" onSubmit={handleSubmit}>
      <h2>Sign In</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button id="userbtn" type="submit">Sign In</button>
    </form>
  );
}

export default Login;