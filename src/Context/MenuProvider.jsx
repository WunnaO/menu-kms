import React, { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  return (
    <MenuContext.Provider value={{ activeMenuItem, setActiveMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
