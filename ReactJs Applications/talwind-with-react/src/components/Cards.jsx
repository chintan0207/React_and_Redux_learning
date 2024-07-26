/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

const Cards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(PRODUCTS_URL);
        const result = await res.json();
        // console.log(result);
        setProducts(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [query, setQuery] = useState("");
  // console.log(query);
  const filterProducts = products.filter((product) => {
    return product.category.toLowerCase().includes(query);
  });
  // console.log(filterProducts);
  return (
    <>
      <div className="border">
        <div className="flex items-center justify-between py-3 px-2 border-b">
          <h1 className="text-3xl">Products</h1>
          <select
            onChange={(e) => setQuery(e.target.value)}
            className="flex outline-none border rounded-md p-1"
          >
            <option value="">All</option>
            <option value="men's clothing">Mens clothing</option>
            <option value="women's clothing">women clothing</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-2 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterProducts.map((product) => {
            return <CardComponent key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
