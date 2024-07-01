import { createSlice } from '@reduxjs/toolkit'


const findItemIndex = (state, action) => {
    return state.findIndex((item) => item.productId === action.payload.productId)
}

export const selectIsInWishlist = (state, productId) =>
    state.wishList.some(item => item.productId === productId);
  

const slice = createSlice({
    name: "wishList",
    initialState: [],
    reducers: {
        addWishListItem(state, action) {
            state.push(action.payload);
        },
        removeWishListItem(state, action) {
            return state.filter(
                (wishListItem) => wishListItem.productId !== action.payload.productId
            )
        }
    }
})
console.log(slice)
export const { addWishListItem, removeWishListItem } = slice.actions

export default slice.reducer

// // Action types
// export const WISHLIST_ADD_ITEM = 'wishList/addItem'
// export const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

// // Action-Creators
// export function addWishListItem(productId) {
//     return { type: WISHLIST_ADD_ITEM, payload: { productId } }
//   }
//   export function removeWishListItem(productId) {
//     return { type: WISHLIST_REMOVE_ITEM, payload: { productId } }
//   }

// // Reducer
// export default function wishListReducer(state = [], action) {
//     switch (action.type) {
//         case WISHLIST_ADD_ITEM:
//             return [...state, action.payload]
//         case WISHLIST_REMOVE_ITEM:
//             return state.filter(
//                 (wishListItem) => wishListItem.productId !== action.payload.productId
//             )
//         default:
//             return state
//     }
// }
