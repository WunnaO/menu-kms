import React, { createContext, useState } from "react";
import { Admin } from "../data/loginPW";

export const LoginCheckContext = createContext();

const LoginCheckProvide = ({ children }) => {
  const [loginPWK, setLoginPWK] = useState(Admin);
  const [isAuth, setIsAuth] = useState(false);
  console.log(loginPWK);

  const checkLogin = (userName, password) => {};

  const login = (userName, password) => {
    console.log(userName, password);
    const p = loginPWK.map();
    console.log(p.password);
    if (checkLogin(userName, password)) {
      const k = { userName, password };
      if ((k = p)) {
        setIsAuth(true);
      }
    } else {
      setIsAuth(false);
    }
  };

  const logOut = () => {
    localStorage.removeItem("au");
    setIsAuth(false);
  };

  return (
    <LoginCheckContext.Provider
      value={{ loginPWK, setLoginPWK, login, logOut }}
    >
      {children}
    </LoginCheckContext.Provider>
  );
};

export default LoginCheckProvide;
