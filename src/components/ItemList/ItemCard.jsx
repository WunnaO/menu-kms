import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="w-[100%] md:w-[45%] lg:w-[295px]  flex flex-col  rounded-md border border-gray-300 p-3">
      <img
        src={item.image}
        alt=""
        className="w-full h-auto object-cover md:h-[200px]"
      />
      <div className="flex justify-between">
        <p className="text-xl text-black">{item.dish}</p>
        <p className="text-xl text-black">${item.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;