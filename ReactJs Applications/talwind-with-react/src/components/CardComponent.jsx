/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CardComponent = ({ product }) => {
  const { id, title, image, price, description, rating, category } = product;

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col rounded-md border overflow-hidden w-[230px] h-[300px]">
        <img className="w-[100%] h-[75%]" src={image} alt="product" />
        <div className="flex flex-col px-2 ">
          <h1 className="text-sm text-start">{title.slice(0, 28)}</h1>
          <p className="font-medium">$ {price}</p>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
