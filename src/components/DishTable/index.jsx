import React, { useContext } from "react";
import { DishDataContext } from "../../Context/DishDataProvider";
import TableRow from "./TableRow";

const DishTable = () => {
  const { dishData } = useContext(DishDataContext);
  return (
    <div className="mt-5">
      <table border={1}>
        <thead>
          <th>No</th>
          <th>Image</th>
          <th>Dish Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </thead>
        <tbody>
          {dishData.map((dish, index) => (
            <TableRow item={dish} key={dish.id} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DishTable;
