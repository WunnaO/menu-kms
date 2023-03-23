import React, { useContext, useState } from "react";
import { CategoryContext } from "../../Context/CategoryProvider";
import Select from "react-select";

const EditCategorySelect = ({ setEdit, edit, propName }) => {
  const { categories } = useContext(CategoryContext);
  console.log(categories);

  return (
    <div>
      <Select
        isMulti
        defaultValue={edit.category}
        name="categories"
        options={categories}
        className="w-full"
        classNamePrefix="select"
        onChange={(e) => {
          const cat = e.map((item) => item.value);
          setEdit({ ...edit, [propName]: cat });
        }}
      />
    </div>
  );
};

export default EditCategorySelect;
