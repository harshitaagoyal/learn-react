import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  todos: [{ id: 1, title: 'Learn Redux Toolkit', completed: false }],  //defining initial state for todo slice
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {                                //in reducers we add properties as functions
        addTodo: (state,action) => {            //in state we get the current state and in action we get the payload,
            const todo={
                id:nanoid(),                   //nanoid is used to generate unique id for each todo
                title:action.payload,          //payload is a property of action object which contains the data we want to add
                completed:false,
            }
            state.todos.push(todo)           //we can directly mutate the state in redux toolkit
            
        },       
        removeTodo: (state,action) => {
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)  //filter method creates a new array with all elements that pass the test implemented by the provided function
        },
        
    },
})

export const {addTodo,removeTodo}=todoSlice.actions   //exporting the actions to be used in components
export default todoSlice.reducer                //exporting the reducer to be used in store.js