import React, { useContext, useState } from "react";
import { CategoryContext } from "../../Context/CategoryProvider";
import Select from "react-select";

const EditCategorySelect = ({ setEdit, edit, propName }) => {
  const { categories } = useContext(CategoryContext);
  console.log(categories);
  const [defaultValue, setDefaultValue] = useState([]);
  const { category } = edit;
  category.forEach((c) => {
    categories.map((item) => {
      if (item.value === c) {
        defaultValue.push(item);
      }
    });
    console.log([...defaultValue]);
  });

  return (
    <div>
      <Select
        isMulti
        defaultValue={defaultValue}
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
