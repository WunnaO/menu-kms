import React from "react";
import { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryProvider";
import CategoryTableRow from "./CategoryTableRow";

const CategoryTable = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <div className="mt-5">
      <table border={1}>
        <thead>
          <th>No</th>
          <th>Category Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <CategoryTableRow item={category} key={index} index={index} />
          ))}
          {categories.length === 0 && (
            <td colSpan={3}>
              <div className="flex justify-center"> No Data</div>
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
