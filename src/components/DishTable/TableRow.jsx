import React, { useContext, useState } from "react";
import EditInput from "../utils/EditInput";
import TableAction from "../utils/TableAction";
import { DishDataContext } from "../../Context/DishDataProvider";
import EditImg from "./EditImg";
import EditCategorySelect from "../utils/EditCategorySelect";

const TableRow = ({ item, index }) => {
  const { editDish, setEditDish, isEdit, setIsEdit, removeDish, updateDish } =
    useContext(DishDataContext);
  const onEditHandler = () => {
    setEditDish(item);
    setIsEdit({ id: item.id, edit: true });
  };

  const onDeleteHandler = () => {
    removeDish(item.id);
  };

  const onCancelHandler = () => {
    setIsEdit({ id: "", edit: false });
  };

  const onSaveHandler = () => {
    updateDish();
    setIsEdit({ id: "", edit: false });
    setEditDish();
  };

  const date = new Date();

  const defaultDate = date.toLocaleDateString();
  const UpDate = date.toLocaleDateString();

  const defaultTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const UpTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  console.log(date);
  // console.log(defaultDate);
  // console.log(UpDate);
  console.log(defaultTime);
  // console.log(UpTime);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {isEdit.id == item.id && isEdit.edit ? (
          // <EditInput type="url" value={item.image} propName="dish" />
          <EditImg value={item.image} />
        ) : (
          <img
            className="mx-auto my-2 object-cover"
            width={120}
            height={120}
            src={item.image}
            alt={item.dish}
          />
        )}
      </td>
      <td>
        {isEdit.id == item.id && isEdit.edit ? (
          <EditInput
            type="text"
            value={item.dish}
            propName="dish"
            setEdit={setEditDish}
            edit={editDish}
          />
        ) : (
          item.dish
        )}
      </td>
      <td>
        {isEdit.id == item.id && isEdit.edit ? (
          <EditInput
            type="number"
            value={item.price}
            propName="price"
            className="w-32"
            setEdit={setEditDish}
            edit={editDish}
          />
        ) : (
          item.price
        )}
      </td>
      <td>
        <div className="text-neutral-800">
          <div>{defaultDate}</div>
          <div>{defaultTime}</div>
        </div>
      </td>
      <td>Wanna Oo</td>
      <td>
        {isEdit.id == item.id && isEdit.edit ? (
          <EditCategorySelect
            propName="category"
            setEdit={setEditDish}
            edit={editDish}
          />
        ) : (
          item.category.map((cat) => (
            <span className=" mx-1 text-white bg-yellow-600 rounded-md px-2 py-[2px]">
              {cat.value}
            </span>
          ))
        )}
      </td>
      <td>
        <TableAction
          item={item}
          isEdit={isEdit}
          onCancelHandler={onCancelHandler}
          onSaveHandler={onSaveHandler}
          onDeleteHandler={onDeleteHandler}
          onEditHandler={onEditHandler}
        />
      </td>
    </tr>
  );
};

export default TableRow;
