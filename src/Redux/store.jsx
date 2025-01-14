import {configureStore} from '@reduxjs/toolkit' ;
import cartSlice from './cartSlice';
import productSlice from './productSlice';
import themeSlice from './themeSlice' ;

const store = configureStore({
    reducer : {
        cart : cartSlice ,
        product : productSlice ,
        theme : themeSlice 
    }
})


export default store ;