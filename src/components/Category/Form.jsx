import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { CategoryContext } from "../../Context/CategoryProvider";
import { useContext } from "react";

const Form = () => {
  const [categoryName, setCategoryName] = useState("");
  const { addCategory } = useContext(CategoryContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      id: v4(),
      c_name: categoryName,
      label: categoryName,
      value: categoryName,
    };
    console.log(newCategory);
    addCategory(newCategory);
    setCategoryName("");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col mb-3">
          <label htmlFor="category-name">Category Name</label>
          <input
            type="text"
            className="outline-none w-64 border border-slate-700 rounded-md p-1 mt-2"
            name="category-name"
            id="category-name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <button className=" rounded-md bg-slate-900 border text-white py-2 px-3">
          Add Category
        </button>
      </form>
    </>
  );
};

export default Form;
