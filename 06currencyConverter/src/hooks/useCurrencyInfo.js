import { useEffect,useState } from "react"

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())  //api gives response in form of string we need to convert it in json to use 
        .then((res)=>setData(res[currency]))
    },[currency])
    return data
}

export default useCurrencyInfo;