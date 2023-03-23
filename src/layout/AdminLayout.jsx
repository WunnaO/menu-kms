import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { adminMenuData } from "../data/adminMenuData";
import { MenuContext } from "../Context/MenuProvider";
import SideBar from "../components/SideBar";

const AdminLayout = () => {
  const [menus, setMenus] = useState(adminMenuData);
  const { setActiveMenuItem } = useContext(MenuContext);

  return (
    <div className="flex ">
      <SideBar menus={menus} />
      <div className="p-5  h-screen overflow-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
