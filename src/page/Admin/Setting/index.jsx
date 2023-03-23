import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../Context/MenuProvider";
import { adminMenuData } from "../../../data/adminMenuData";

const Setting = () => {
  const [menus, setMenus] = useState(adminMenuData);
  const { setActiveMenuItem } = useContext(MenuContext);
  useEffect(() => {
    setActiveMenuItem(menus[2]);
    console.log("setting admin");
  }, []);
  return <div>Setting</div>;
};

export default Setting;
