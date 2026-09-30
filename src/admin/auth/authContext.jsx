import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("adminAuth") === "true"
  );

  function Login(username, password) {
    if (username === "IBT" && password === "college") {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");

      return true;
    }

    return false;
  }

  function logout() {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuth");
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        Login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;