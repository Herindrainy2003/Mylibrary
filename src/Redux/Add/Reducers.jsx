import { createSlice } from "@reduxjs/toolkit";
export const BookReducer = createSlice({
    name : 'Book',
    initialState : {
        Books : []
    }, reducers: {
        AddBookReducers : (state, action)=>{
            state.Books.push(action.payload);
            const oldBooks = JSON.parse(localStorage.getItem('books'))||[];
            var newBooks = [ ...oldBooks,...state.Books];
           
            localStorage.setItem('books', JSON.stringify(newBooks))
        }
    }

})

export const {AddBookReducers} = BookReducer.actions;

export default BookReducer.reducer
