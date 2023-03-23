import React, { useContext, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import classes from "./EditImg.module.css";
import { DishDataContext } from "../../Context/DishDataProvider";

const EditImg = (props) => {
  const { setEditDish, editDish } = useContext(DishDataContext);

  const [imgUrl, setImgUrl] = useState(props.value);

  const onImgChangeHandler = () => {
    const url = prompt("Enter you image url");
    console.log(url);
    setEditDish({ ...editDish, image: url || imgUrl });
  };
  return (
    <div
      onClick={onImgChangeHandler}
      style={{ width: 120, height: 120 }}
      className={`${classes.edit_img} my-2 bg-green-200 mx-auto flex justify-center items-center`}
    >
      <AiOutlineCloudUpload color="#0d0d0d" size={32} />
    </div>
  );
};

export default EditImg;
