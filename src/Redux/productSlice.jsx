import {createSlice} from '@reduxjs/toolkit' ;

const initialState = {
    products : [] ,
    filteredProducts :[]

}
const productSlice = createSlice({
    name : 'products' ,
    initialState,
    reducers :{
        setProducts(state,action){
            state.products = action.payload ;
            state.filteredProducts = state.products ;
        },
        searchProducts(state, action) {
            const searchKey = action.payload.toLowerCase().trim();
            state.filteredProducts = state.products.filter(product =>
                  product.name.toLowerCase().includes(searchKey.toLowerCase()) ||
                  product.description.toLowerCase().includes(searchKey.toLowerCase()) 

                ) ;
          
          } ,

        filterProductsByCategory(state,action){
            if(action.payload=="all" || !action.payload){
                state.filteredProducts = state.products
            }else{
                state.filteredProducts = state.products.filter(product=>product.category==action.payload) ;
            }
        },
        sortProductsAsc(state){
            state.filteredProducts = state.products.sort((a,b)=>a.price - b.price) ;
        },
        sortProductsDesc(state){
            state.filteredProducts = state.products.sort((a,b)=>b.price - a.price) ;
        },
        filterProductByPrice(state,action){
            state.filteredProducts = state.products.filter(product => 
                (action.payload?.min ? product.price >= action.payload.min : true) &&
                (action.payload?.max ? product.price <= action.payload.max : true)
            );
            
        }
    },
})

export const {setProducts ,filterProductByPrice, searchProducts ,filterProductsByCategory ,sortProductsAsc,sortProductsDesc } = productSlice.actions ;
export default productSlice.reducer ;