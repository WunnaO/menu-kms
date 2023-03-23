import React, { useContext, useEffect, useRef, useState } from "react";
import { DishDataContext } from "../../Context/DishDataProvider";
import { v4 as uv4 } from "uuid";
import CategorySelect from "../utils/CategorySelect";

const Form = () => {
  const { dishData, addDish } = useContext(DishDataContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [categories, setCategories] = useState([]);
  const [isClear, setIsClear] = useState(false);
  const categoryRef = useRef();

  useEffect(() => {
    if (isClear) {
      setIsClear(false);
    }
  }, [isClear]);

  const resetFrm = () => {
    setName("");
    setImg("");
    setPrice("");
    setIsClear(true);
    setIsClear(true);
    console.log(categoryRef);
    categoryRef.current.clearValue();
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const id = uv4();
    console.log({ id, name, img, price, categories });
    const newDish = { id, dish: name, image: img, price, category: categories };
    addDish(newDish);
    resetFrm();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex flex-col mb-3">
        <label htmlFor="img">Dish Picture</label>
        <input
          type="url"
          name="img"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="outline-none border border-slate-700 rounded-md p-1 mt-2"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="dish-title">Dish Name</label>
        <input
          type="text"
          className="outline-none border border-slate-700 rounded-md p-1 mt-2"
          name="dish-title"
          id="dish-title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="outline-none border border-slate-700 rounded-md p-1 mt-2"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="category">Category</label>
        <div className="chk-group flex gap-3">
          <CategorySelect setState={setCategories} ref={categoryRef} />
        </div>
      </div>
      <button className=" rounded-md bg-slate-900 border text-white py-2 px-3">
        Add Food
      </button>
    </form>
  );
};

export default Form;
