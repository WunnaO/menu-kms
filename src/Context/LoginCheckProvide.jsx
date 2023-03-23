import React, { createContext, useState } from "react";
import { Admin } from "../data/userEmail";

export const LoginCheckContext = createContext();

const LoginCheckProvide = ({ children }) => {
  const [userEmail, setUserEmail] = useState(Admin);
  return (
    <LoginCheckContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </LoginCheckContext.Provider>
  );
};

export default LoginCheckProvide;


