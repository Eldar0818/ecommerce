import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        amount: 0,
        total: 0
    },

    reducers: {
        addCartItems: (state, action)=> {
            state.amount += 1;
            state.cartItems.push({...action.payload, id: Date.now() * Math.random(1000)})
            state.total += action.payload.product.price * action.payload.amount
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeCartItem: (state, action)=> {
            let newCartItems = state.cartItems.filter(item=> item.product._id !== action.payload._id)
            state.cartItems = newCartItems
            state.amount -= 1
            localStorage.setItem("cartItems", JSON.stringify(newCartItems))
        },
        totalPriceCalculate: (state, action)=> {
            let {cartTotal, cartAmount} = state.cartItems.reduce((acc, item)=> {
                let itemPrice = item.product.price
                let itemAmount = item.amount
                let sum = itemPrice * itemAmount 

                acc.cartTotal += sum
                acc.cartAmount += itemAmount

                return acc

            }, { cartTotal: 0,  cartAmount: 0})

            state.amount = cartAmount
            state.total = cartTotal
        }
    }
})

export const { addCartItems, removeCartItem, totalPriceCalculate } = cartSlice.actions
export default cartSlice.reducer