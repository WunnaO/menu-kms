import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../../components/SideBar";
import ItemList from "../../../components/ItemList";
import { MenuData } from "../../../data/menuData";
import { MenuContext } from "../../../Context/MenuProvider";
import { Link } from "react-router-dom";

const Home = () => {
    const [menus, setMenus] = useState(MenuData);
    const {setActiveMenuItem} = useContext(MenuContext)
    useEffect(() => {
      setActiveMenuItem(menus[0])
    }, [])
    
  return (
    <div className="flex">
      <SideBar menus={menus} />
     
      <ItemList />
    </div>
  );
};

export default Home;
