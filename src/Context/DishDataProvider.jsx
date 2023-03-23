import React, { createContext, useState } from "react";
import { DishData } from "../data/DishData";

export const DishDataContext = createContext();

const DishDataProvider = ({ children }) => {
  const [dishData, setDishData] = useState(DishData);
  const [editDish, setEditDish] = useState();
  const [isEdit, setIsEdit] = useState({ id: "", edit: false });

  const addDish = (dish) => {
    setDishData([...dishData, dish]);
    console.log("adddish");
  };

  const removeDish = (dishId) => {
    const filterDish = dishData.filter((item) => item.id != dishId);
    setDishData(filterDish);
  };

  const updateDish = () => {
    const changeDish = dishData.map((item) => {
      if (item.id == editDish.id) {
        return editDish;
      }
      return item;
    });

    setDishData(changeDish);
  };
  return (
    <DishDataContext.Provider
      value={{
        dishData,
        addDish,
        editDish,
        setEditDish,
        isEdit,
        setIsEdit,
        removeDish,
        updateDish,
      }}
    >
      {children}
    </DishDataContext.Provider>
  );
};

export default DishDataProvider;
