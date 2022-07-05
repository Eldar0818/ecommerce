import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { totalPriceCalculate } from './cartRedux'

export const store = configureStore({ 
    reducer: {
        cart: cartReducer
    }
 })

 store.dispatch(totalPriceCalculate())