import React, { useEffect, useState } from "react";


function Counter(){

    const[value,setValue]=useState(0);
    // const[mul,setMul]=useState(0);



    useEffect(()=>{
        setTimeout(()=>{
        //  setMul(value*2)

        // const timer=(e)=>
        setValue(value+1) 

        // return()=>clearInterval(timer)

        },1000)
    },[])
    return(
        <div>
            <h1>xdcfvghbnj{value}</h1>
            {/* <button  onClick={timer}>click{mul}</button> */}

        </div>
    );
}


export default Counter;