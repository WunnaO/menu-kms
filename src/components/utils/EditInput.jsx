import React, { useContext, useState } from "react";
import { DishDataContext } from "../../Context/DishDataProvider";

const EditInput = (props) => {
  const [inputState, setInputState] = useState(props.value);
  // const { editDish, setEditDish } = useContext(DishDataContext);

  return (
    <>
      <input
        {...props}
        value={inputState}
        onChange={(e) => {
          setInputState(e.target.value);
          props.setEdit({ ...props.edit, [props.propName]: e.target.value });
        }}
      />
    </>
  );
};

export default EditInput;
