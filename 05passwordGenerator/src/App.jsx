import { use, useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const[password,setPassword] = useState('')

  const passwordRef=useRef(null)

  const generatePassword = useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*()_+"
    }
    for(let i=0;i<length;i++){
      let index = Math.floor(Math.random()*str.length)
      pass+=str.charAt(index)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])  //[] these are the dependencies on which the function will re-create itself

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    generatePassword()
  },[generatePassword,length,numberAllowed,charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='bg-orange-500 text-white px-3 py-1'
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label >length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
            <label htmlFor='numberInput'>Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
            <label htmlFor='charInput'>Include Characters</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
