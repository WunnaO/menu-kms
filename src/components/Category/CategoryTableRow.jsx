import React from "react";
import { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryProvider";
import TableAction from "../utils/TableAction";
import EditInput from "../utils/EditInput";

const CategoryTableRow = ({ item, index }) => {
  const {
    isEdit,
    setIsEdit,
    deleteCategory,
    setEditCategory,
    editCategory,
    updateCategory,
  } = useContext(CategoryContext);

  const onDeleteHandler = () => {
    deleteCategory(item.id);
  };

  const onEditHandler = () => {
    setEditCategory(item);
    setIsEdit({ id: item.id, edit: true });
  };
  const onSaveHandler = () => {
    updateCategory();
    setIsEdit({ id: "", edit: false });
    setEditCategory();
  };

  const onCancelHandler = () => {
    setIsEdit({ id: "", edit: false });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {isEdit.id === item.id && isEdit.edit ? (
          <EditInput
            type="text"
            value={item.c_name}
            propName="c_name"
            setEdit={setEditCategory}
            edit={editCategory}
          />
        ) : (
          item.c_name
        )}
      </td>
      <td>
        <TableAction
          item={item}
          isEdit={isEdit}
          onCancelHandler={onCancelHandler}
          onDeleteHandler={onDeleteHandler}
          onSaveHandler={onSaveHandler}
          onEditHandler={onEditHandler}
        />
      </td>
    </tr>
  );
};

export default CategoryTableRow;
