import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../../components/SideBar";
import { adminMenuData } from "../../../data/adminMenuData";
import { MenuContext } from "../../../Context/MenuProvider";
import Form from "../../../components/Form";
import DishTable from "../../../components/DishTable";

const Admin = () => {
  const [menus, setMenus] = useState(adminMenuData);
  const { setActiveMenuItem } = useContext(MenuContext);

  useEffect(() => {
    setActiveMenuItem(menus[0]);
    console.log("Home admin");
  }, []);
  return (
    <>
      <Form />
      <DishTable />
    </>
  );
};

export default Admin;
