import React, { useState, useEffect } from 'react';


const APIComponent =()=>{

    const [data, setData] = useState([]);


    const fetchData = async () => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const responseData = await response.json();
        setData(responseData);
    };

    useEffect(()=>{
        fetchData();
    },[])

    return (<React.Fragment>
            {data.map((user)=><div key = {user.id}
                className = "main-container"> 
                <ul>
                    <li>{user.userId}</li>
                    <li>{user.id}</li>
                    <li>{user.title}</li>
                    <li>{user.body}</li>
                </ul>
            </div>)}
    </React.Fragment>)
} 

export default APIComponent;