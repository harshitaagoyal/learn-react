import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Contexts/TodoContext'
import { TodoForm } from './components'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {     //this todo value is coming from the form not from the usestate defined above, use state defined above consists of all the todos but we want to add a single todo here which comes from the form
    setTodos((prev) => [...prev,{id:Date.now(),...todo}])   //spread operator to get all the previous todos and then add the new todo at the end
  }

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((t) => t.id === id ? {...t,...todo} : t))   //if the id matches then update that todo else return the same todo, t refers to each todo in the array
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))   //filter out the todo with the given id
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((t) => t.id === id ? {...t,completed:!t.completed} : t))   //if the id matches then toggle the completed value
  }

  useEffect(() => {                                        //when we load the page we get all the previous saved todos
    const todos=JSON.parse(localStorage.getItem("todos"))  //get the todos from local storage
    if(todos && todos.length>0){                               //if there are todos
      setTodos(todos)                                      //set the todos in the state
    }
  })

  useEffect(() => {                                        //whenever there is a change in todos we will save it to local storage
    localStorage.setItem("todos",JSON.stringify(todos))    //set the todos in local storage
  },[todos])

  return (
    //take all the variables you have declared in todocontext and pass them in value prop of todoprovider
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>  
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo) => (
                      <div key={todo.id} className="w-full mb-2">
                          <TodoItem todo={todo} />
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
