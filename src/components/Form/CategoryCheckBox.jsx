import React, { useEffect, useRef } from "react";

const CategoryCheckBox = ({ item, setCategories, categories, isClear }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (isClear) {
      // console.log(inputRef);
      // console.log(inputRef.current);
      inputRef.current.checked = false;
    }
  }, [isClear]);
  return (
    <div>
      <input
        type="checkbox"
        value={item.c_name}
        name={item.c_name}
        id={item.id}
        ref={inputRef}
        onClick={(e) => {
          const filterCategories = categories.filter(
            (item) => item != e.target.value
          );
          if (e.target.checked) {
            setCategories([...filterCategories, e.target.value]);
          }else{
            setCategories(filterCategories)
          }
        }}
        className="mr-2"
      />
      <label htmlFor={item.id}>{item.c_name}</label>
    </div>
  );
};
export default CategoryCheckBox;
