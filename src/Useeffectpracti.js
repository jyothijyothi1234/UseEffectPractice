import React, { useEffect, useState } from "react";
 import { Button } from "@mui/material";

function Appli(){
    const[value,setValue]=useState(0);
    

    const timer=()=>{
        setValue(value+1)

    }
 useEffect(()=>{
    setTimeout(()=>{
       console.log("hai jyothi") 
    },1000)
 },[value])
    

    return(
<div>
    {/* <h3> vgrvhjfkadl{value} </h3> */}
  <Button  onClick={timer}  >click{value}</Button>

</div>
    );
}


export default  Appli;