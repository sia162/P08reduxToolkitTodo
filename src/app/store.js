// step 1: create store - configure store
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";


export const store = configureStore({
    reducer: todoReducer  
});
 
