import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../store/Slices/cartSlice";
import { addWishListItem, removeWishListItem, selectIsInWishlist } from "../store/Slices/wishListSlice";

export default function Product({ productId, title, rating, price, imageUrl }) {

  console.log("redering...")
  const isInWishlist = useSelector(state => selectIsInWishlist(state, productId));


  const dispatch = useDispatch()
  
  const handleChange = (e) => {
  }
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={() => {
            dispatch(addCartItem({ productId, title, rating, price, imageUrl }))

          }}
        >Add to Cart</button>

        <input type="checkbox" name="wishlist" onChange={handleChange} />
        <button>Buy Now</button>
      </div>
    </div>
  )
}