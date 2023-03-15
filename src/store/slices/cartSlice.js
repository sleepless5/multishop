import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload


      const foundItem = state.cartItems.find(item => item.id === newItem.id)
      if (!foundItem) {


        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          price: newItem.price,
          image: newItem.imgUrl,
          quantity: 1,
          totalPrice: newItem.price

        })

      } else {
        foundItem.quantity++
        foundItem.totalPrice = Number(foundItem.totalPrice) + Number(newItem.totalPrice)

      }
      state.totalAmount = state.cartItems.reduce((total, item) => total += Number(item.price) * Number(item.quantity), 0)
      state.totalQuantity++
    },
    deleteItem(state, action) {
      const id = action.payload

      const existingItem = state.cartItems.find(item => item.id === id)
      if (existingItem) {
        state.cartItems = state.cartItems.filter(item => item.id !== existingItem.id)
        state.totalQuantity = state.totalQuantity - existingItem.quantity
      }

      state.totalAmount = state.cartItems.reduce((total, item) => total += Number(item.price) * Number(item.quantity), 0)

    },
    increaseItemCount(state, action) {
      const id = action.payload
      const foundItem = state.cartItems.find(item => item.id === id)
      foundItem.quantity++
      state.totalQuantity++
      state.totalAmount = state.cartItems.reduce((total, item) => total += Number(item.price) * Number(item.quantity), 0)
    },
    decreaseItemCount(state, action) {
      const id = action.payload
      const foundItem = state.cartItems.find(item => item.id === id)
      if (foundItem.quantity > 1) {
        foundItem.quantity--
        state.totalAmount--
        state.totalQuantity--
      }
      state.totalAmount = state.cartItems.reduce((total, item) => total += Number(item.price) * Number(item.quantity), 0)
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer