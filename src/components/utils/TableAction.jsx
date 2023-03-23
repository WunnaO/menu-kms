import React, { useContext } from "react";
import { DishDataContext } from "../../Context/DishDataProvider";

const TableAction = ({
  item,
  onEditHandler,
  onSaveHandler,
  onDeleteHandler,
  onCancelHandler,
  isEdit,
}) => {
  const Edit = (
    <>
      <button
        onClick={onEditHandler}
        className="border rounded-md bg-yellow-500 text-white py-2 px-3"
      >
        Edit
      </button>

      <button
        onClick={onDeleteHandler}
        className="border ml-2 rounded-md bg-red-800 text-white py-2 px-3"
      >
        Delete
      </button>
    </>
  );

  const Save = (
    <>
      <button
        onClick={onSaveHandler}
        className="border rounded-md bg-green-700 text-white py-2 px-3"
      >
        Save
      </button>
      <button
        onClick={onCancelHandler}
        className="border rounded-md bg-red-700 text-white py-2 px-3"
      >
        Cancel
      </button>
    </>
  );

  return <div>{isEdit.id == item.id && isEdit.edit ? Save : Edit}</div>;
};

export default TableAction;
