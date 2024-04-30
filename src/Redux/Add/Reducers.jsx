import { createSlice } from "@reduxjs/toolkit";
export const BookReducer = createSlice({
    name : 'Book',
    initialState : {
        Books : []
    }, reducers: {
        AddBookReducers : (state, action)=>{
            const oldBooks = JSON.parse(localStorage.getItem('books'))||[];
            const tatbleExist = oldBooks.some(book => book.titre === action.payload.titre);
            if(!tatbleExist){
                state.Books.push(action.payload);
                var newBooks = [ ...oldBooks,...state.Books];
                localStorage.setItem('books', JSON.stringify(newBooks))
            }
        }
    }

})

export const {AddBookReducers} = BookReducer.actions;

export default BookReducer.reducer
