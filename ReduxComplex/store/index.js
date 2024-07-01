import { combineReducers, createStore } from 'redux'
import productReducer from './productReducer';
import cartReducer, { addCartItem, decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from './cartReducer';
import wishListReducer, { addWishListItem, removeWishListItem } from './wishListReducer';


const reducer = combineReducers({
  products:productReducer,
  cartItems:cartReducer,
  wishList:wishListReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store)

// store.dispatch(addCartItem(17))
// store.dispatch(addCartItem(12))
// store.dispatch(addCartItem(1))
// store.dispatch(addCartItem(10))
// store.dispatch(removeCartItem(12))
// store.dispatch(increaseCartItemQuantity(10))
// store.dispatch(increaseCartItemQuantity(17))
// store.dispatch(increaseCartItemQuantity(17))
// store.dispatch(decreaseCartItemQuantity(10))
// store.dispatch(decreaseCartItemQuantity(10))


// store.dispatch(addWishListItem(6))
// store.dispatch(addWishListItem(14))
// store.dispatch(addWishListItem(10))
// store.dispatch(removeWishListItem(6))












