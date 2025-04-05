import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items : [],
    totalQuantity : 0 ,
    totalPrice : 0
}


const cartSlice = createSlice({
    name :"cart",
    initialState , 
    reducers : {
        addToCart : (state , action) =>{
            const item = state.items.find((item)=> item.id === action.payload.id)

            if(item){
                item.quantity += 1
            }else{
                state.items.push({...action.payload , quantity : 1 })
            }

            state.totalQuantity += 1
            state.totalPrice += action.payload.price
        } , 
        removeFromCart : (state,action)=>{
            const item = state.items.find((item)=> item.id === action.payload.id)
            if(item){
                state.totalQuantity -= item.quantity;
                state.totalPrice -= item.price * item.quantity
                state.items = state.items.filter((item)=> item.id !== action.payload.id)
            }
        } , 
        clearCart :(state)=>{
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
})

export const {addToCart , removeFromCart , clearCart} = cartSlice.actions

export default cartSlice.reducer