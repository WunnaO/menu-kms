import React, { useContext, useState } from "react";
import SideBar from "../../../components/SideBar";
import { MenuContext } from "../../../Context/MenuProvider";
import { adminMenuData } from "../../../data/adminMenuData";
import { useEffect } from "react";
import Form from "../../../components/Category/Form";
import CategoryTable from "../../../components/Category/CategoryTable";

const Category = () => {
  const [menus, setMenus] = useState(adminMenuData);
  const { setActiveMenuItem } = useContext(MenuContext);

  useEffect(() => {
    setActiveMenuItem(menus[1]);
    console.log("category admin");
  }, []);
  return (
    <div>
      <Form />
      <div className="mt-5">
        <CategoryTable />
      </div>
    </div>
  );
};

export default Category;
