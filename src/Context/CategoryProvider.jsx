import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { CategoryData } from "../data/CategoryData";

export const CategoryContext = createContext();
const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(CategoryData);
  const [isEdit, setIsEdit] = useState({ id: "", edit: false });
  const [editCategory, setEditCategory] = useState();

  const addCategory = (newCategory) => {
    const check = categories.find((c) => c.c_name === newCategory.c_name);
    if (check) {
      return;
    }
    setCategories([...categories, newCategory]);
  };

  const deleteCategory = (categoryId) => {
    const removeCategory = categories.filter((c) => c.id != categoryId);
    setCategories(removeCategory);
  };

  const updateCategory = () => {
    const changeCategories = categories.map((item) => {
      if (item.id == editCategory.id) {
        return editCategory;
      }
      return item;
    });

    setCategories(changeCategories);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        isEdit,
        deleteCategory,
        setEditCategory,
        editCategory,
        setIsEdit,
        updateCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
