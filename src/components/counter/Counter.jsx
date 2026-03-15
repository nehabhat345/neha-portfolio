import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter =()=>{
        setCounter(prev => prev + 1);
    }
    const decrementCounter =()=>{
        setCounter(prev => prev -1);
    }
    return (<React.Fragment>
        <div>{counter}</div>
        <div>
            <button style={{ height: "200px", width : "200px"}} 
            onClick={incrementCounter}>+</button>
            <button style = {{ height: "200px", width : "200px"}} 
            onClick={decrementCounter}>-</button>
        </div>
    </React.Fragment>)
}

export default Counter;