import React from 'react'
import Product from '../components/Product'
import "../App.css"
import { useSelector } from 'react-redux'


export default function Home() {
  const productsLists = useSelector((state) => state.products)
  return (
    <div className="products-container">
    {productsLists.map(({ id, title, rating, price, image }) => (
      <Product
        key={id}
        productId={id}
        title={title}
        rating={rating.rate}
        price={price}
        imageUrl={image}
      />
    ))}
  </div>
  )
}
