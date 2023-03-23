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
        {isEdit.id == item.id && isEdit.edit ? (
          <EditCategorySelect
            propName="category"
            setEdit={setEditDish}
            edit={editDish}
          />
        ) : (
          item.category.map((cat) => (
            <span className=" mx-1 text-white bg-yellow-600 rounded-md px-2 py-[2px]">
              {cat}
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
