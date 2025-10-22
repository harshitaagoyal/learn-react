import { createContext,useContext } from "react";

export const TodoContext=createContext({       //whenever i will get this context i will get all these values automatically
    todos:[                                   //todo is an array of objects 
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addTodo: (todo) => {},                //functions - only method name not the functionality (functionality in app.jsx)
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider