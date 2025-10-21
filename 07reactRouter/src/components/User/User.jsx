import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid}=useParams(); //useParams is a hook provided by react-router-dom to access the dynamic parameters in the URL
    return(
        <div className="bg-gray-600 text-white text-3xl p-4">User:{userid}</div>
    )
}