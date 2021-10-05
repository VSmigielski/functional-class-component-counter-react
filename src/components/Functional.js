import React ,{useState} from "react";
import Card from './UI/Card/Card'
 
const FunctionalComponent=()=>{
    const[count , setCount]=useState(0);
 
    const increase=()=>{
        setCount(count+1);
    }
 
    return (
        <Card>
            <div style={{margin:'50px'}}>
                <h1 className="pt-4">Welcome to the Functional Component </h1>
                <h3 className="mb-4 mt-4">Counter App using Functional Component : </h3>
                <h2>{count}</h2>
                <button className="btn-info rounded pt-2 pb-2 ps-4 pe-4 mb-5 mt-1" onClick={increase}>Add</button>
            </div>  
        </Card>
        
    )
} 
 
 
export default FunctionalComponent;