import React, { use } from "react";
import { useLoaderData } from "react-router-dom";

function Github (){
    const data=useLoaderData();                    //useLoaderData is a hook provided by react-router-dom to access the data returned by the loader function associated with the route
    // const [data,setData]=useState([]);
    // useEffect(() => {                                  //we will use useEffect to fetch data from github api
    //     fetch('https://api.github.com/users/harshitaagoyal')
    //     .then(response => response.json())
    //     .then(data=>{
    //         setData(data);
    //     })
    // }, []);
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers:{data.followers}</div>
    )
}

export default Github;

export const githubInfoLoader=async()=>{                             //loader function to fetch data before rendering the component
    const response=await fetch('https://api.github.com/users/harshitaagoyal');
}