import productReducer from './Slices/productSlice';
import cartReducer from './Slices/cartSlice';
import wishListReducer, { addWishListItem, removeWishListItem } from './Slices/wishListSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
})









