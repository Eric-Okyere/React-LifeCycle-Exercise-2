import React, {useState, useEffect} from 'react'
import axios from "axios";


function UsersFunctions() {
    const [customers, setCustomers] = useState([]);
  
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((eric)=>{
            setCustomers(eric.data);
            console.log(eric.data);
        })
        .catch((err) => {
            console.log(err);
        });
    })
  
    return (
    <div>
    {customers.map((com)=>{
        return(
            <div key={com.id}>
            <h1>Name:{com.name}</h1>
            <h1>Username:{com.username}</h1>
            <h1>Email:{com.email}</h1>
            <hr />
            </div>
        )
    })}
    </div>
  )
}

export default UsersFunctions;