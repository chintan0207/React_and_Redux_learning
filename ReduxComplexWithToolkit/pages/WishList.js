import React from 'react'
import { useSelector } from 'react-redux'
import WishListItem from '../components/WishListItem'

export default function WishList() {

    const wishList = useSelector((state) => state.wishList)
    console.log(wishList)
    return (
        <>
        <h2>My WishList</h2>
        <p>{wishList.length} items</p>
        <div className='wishlist-container'>
             {
                wishList.map(({productId, title, rating, price, imageUrl}) =>{
                    return(
                      <WishListItem
                       key={productId}
                       title={title}
                       rating={rating}
                       price={price}
                       imageUrl={imageUrl}
                       />
                )})
             }
        </div>
        </>
    )
}
