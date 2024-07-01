import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from "../assets/cart-icon.svg"
import { useSelector } from 'react-redux'

export default function Header({showAlert}) {

  const cartItems = useSelector((state) => state.cartItems)
  const wishList = useSelector((state) => state.wishList)

  return (
    <header>
    <div className="header-contents">
      <h1>
        <Link to="/" onClick={() => {showAlert("Item Added Successfully...")}}>Shopee</Link>
      </h1>
      <Link to='/wishlist'>WishList{wishList.length}</Link>
      <Link className="cart-icon" to="/cart">
        <img src={CartIcon} alt="cart-icon" />
        <div className="cart-items-count">{(cartItems.reduce(
          (accumaltor,currentItem)=> accumaltor + currentItem.quantity,0))}</div>
      </Link>
    </div>
  </header>
  )
}
