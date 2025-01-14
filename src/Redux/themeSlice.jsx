import {createSlice} from '@reduxjs/toolkit' ;


const initialState = {
    themeState :true
}

const themeSlice = createSlice({
    name :'theme' ,
    initialState ,
    reducers :{
        toggleTheme(state){
            state.themeState = !state.themeState ;
        }
    }
}) ;

export const {toggleTheme} = themeSlice.actions ;
export default themeSlice.reducer ;