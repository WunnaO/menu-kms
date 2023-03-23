import React, { forwardRef } from "react";
import { useContext } from "react";
import Select from "react-select";
import { CategoryContext } from "../../Context/CategoryProvider";

const CategorySelect = forwardRef(({ setState }, ref) => {
  const { categories } = useContext(CategoryContext);
  console.log(categories);
  return (
    <>
      <Select
        isMulti
        name="categories"
        options={categories}
        className="w-full"
        classNamePrefix="select"
        ref={ref}
        onChange={(e) => {
          const cat = e.map((item) => item);
          setState(cat);
        }}
      />
    </>
  );
});

export default CategorySelect;
