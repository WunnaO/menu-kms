import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../Context/MenuProvider";
import ItemCard from "./ItemCard";
import { DishDataContext } from "../../Context/DishDataProvider";

const ItemList = () => {
  const { activeMenuItem } = useContext(MenuContext);
  const { dishData } = useContext(DishDataContext);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    console.log(dishData);
    let dataFilter = [];
    dishData.forEach((item) => {
      console.log(item.category);

      item.category.forEach(
        (c) => c == activeMenuItem.value && dataFilter.push(item)
      );
    });
    console.log(dataFilter);
    setDishes(dataFilter);
  }, [activeMenuItem]);

  return (
    <div className="px-12 pt-8 h-screen overflow-auto">
      <h2 className="text-lg font-bold">{activeMenuItem.title}</h2>
      <div className="flex flex-wrap mt-8 gap-8 ">
        {dishes.length > 0 &&
          dishes.map((item) => <ItemCard item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default ItemList;
