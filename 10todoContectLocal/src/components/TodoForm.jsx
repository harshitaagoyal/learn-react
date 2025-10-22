import React from "react";
import { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

function TodoForm() {
    const [todo,setTodo]=useState("")  //state to hold the value of the todo input field, for single todo item
    const {addTodo}=useTodo()         //get the addTodo function from the context
    const add=(e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo,completed:false})  //call the addTodo function with the new todo object
    }

    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

