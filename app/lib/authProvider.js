import { createContext, useContext, useState } from "react";
import { getStoragePictureUrl, setStoragePictureUrl, getUserName, getUserToken, setUserName, setUserToken } from "./utils";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(getUserToken() || "");
  const [userName, setUserNameState] = useState(getUserName() || "");
  const [pictureUrl, setPictureUrl] = useState(getStoragePictureUrl() || "");

  const setUserAuthAndState = (token, userName) => {
    setUserToken(token);
    setUserName(userName);

    setTokenState(token);
    setUserNameState(userName);
  };

  const login = (newToken) => {
    if (newToken && newToken.length > 0) {
      let claims = parseJwt(newToken);
      setUserAuthAndState(newToken, claims.Name);
    }
  };

  const logout = () => {
    setUserAuthAndState("", "");
  };

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isLoggedIn, userName, pictureUrl, setStoragePictureUrl }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
