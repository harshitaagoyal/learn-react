import React,{useContext,useState} from "react";

import UserContext from "../context/userContext";

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit=()=>{
        //logic for login
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <div>
            <h2>Login</h2>  
            <input type="text" 
            value={username}                             //controlled component
            onChange={(e)=>setUsername(e.target.value)}  //updating state on input change
            placeholder="username"/>
            {" "}
            <input type="password"
            value={password}                            
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"/>
            <button onClick={handleSubmit}>Login</button>   
        </div>
    )
}

export default Login;