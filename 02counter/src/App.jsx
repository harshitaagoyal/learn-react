import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)

  // let counter=15;
  
  const addValue = () =>{
    // counter=counter+1;
    if(counter<20 && counter>0) setCount(counter+1);
    // console.log(counter);
    // return counter;
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br/>
      <button>remove value</button>
    </>
  )
}

export default App
