import { configureStore } from "@reduxjs/toolkit";
import BookReducer  from "./Add/Reducers";
import  searchBooks  from "./Search/Reducers";

export default configureStore({
    reducer : {
        book : BookReducer,
        result : searchBooks
    },
    devTools : true
})