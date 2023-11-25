import { createSlice, nanoid } from "@reduxjs/toolkit";

//initial state of state is important;
const initialState = {
  todos: [{ id: 1, text: "hell no" }],
};

//now we create slice; bigger version of reducer - reducer is a functionality
//we give name to slices
//next create reducer: it has properties and functions
//functions always give/have two things: state and action
//state - give access to current state
//actions - the values that come, eg: id in case of remove; has payload property(is object)
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
        const todo = { 
            id: nanoid(), 
            text: action.payload
        }

        state.todos.push(todo)
    },
    removeTodo: (state,action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state,action) =>{
      state.todos.map((todo) => todo.id === action.payload.id? action.payload.todo : todo)
    }
  },
})


//exporting reducer:  above not done yet
//exporting functionality
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions


//store also needs awareness
export default todoSlice.reducer
