import {createSlice} from '@reduxjs/toolkit' ;

const initialState = {
    products : [
    ] ,
    totalElements : 0 ,
    totalPrice : 0 ,

}
const cartSlice = createSlice({
    name : 'cart' ,
    initialState ,
    reducers :{
        addToCart(state,action){
            const addedItem = action.payload ;
            const findItem = state.products.find((item)=>item.id == addedItem.id ) ;
            if(findItem){
                findItem.quantity++ ;
                findItem.totalPrice += addedItem.price ;
            }else{
                state.products.push({
                    ...addedItem,quantity:1,totalPrice : addedItem.price 
                })
            }
            state.totalPrice+= addedItem.price ;
            state.totalElements ++ ;
        },
        deleteItem(state,action){
            const id = action.payload ;
            const findItemToDelete = state.products.find(el=>el.id == id)
            if(findItemToDelete)
            {
                state.totalPrice -= findItemToDelete.totalPrice ;
                state.totalElements -= findItemToDelete.quantity ;
                state.products = state.products.filter(el=>el.id != id)
            }
            
        },
        plusQuantity(state,action){
            const id = action.payload ;
            const findItem= state.products.find((item)=>item.id == id) ;
            if(findItem)
            {
                findItem.quantity++;
                findItem.totalPrice += findItem.price ;
                state.totalElements ++ ;
                state.totalPrice += findItem.price ;
            }
        },
        minusQuantity(state,action){
            const id = action.payload ;
            const findItem= state.products.find((item)=>item.id == id) ;
            console.log(findItem)
            if(findItem)
            {
                
                if(findItem.quantity!==0){
                    state.totalElements -- ;
                    findItem.quantity--;
                    findItem.totalPrice -= findItem.price ;
                    state.totalPrice -= findItem.price ;
                }
                
            }
        }
    },
})
export const {addToCart,deleteItem,plusQuantity,minusQuantity} = cartSlice.actions 
export default cartSlice.reducer ;