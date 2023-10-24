import { createContext, useContext, useState } from "react";
import { getUserToken, setUserToken } from "./utils";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getUserToken() || "");

  const login = (newToken) => {
    setUserToken(newToken);
    setToken(newToken);
  };

  const logout = () => {
    setUserToken("");
    setToken("");
  };

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};