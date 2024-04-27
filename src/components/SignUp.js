import React, { useState } from 'react'

const SignUp = () => {
    const[fruits,setFruits]=useState(["apple","ball","cat"]);
    const[filterFruits,setFilterFruits]=useState('')

    
             const filterfruit=fruits.filter((item)=>
        item.toLowerCase().includes(filterFruits.toLowerCase())
       )

      
    

    return (
        <div>
         <input type="text"  onChange={(e)=>setFilterFruits(e.target.value)}></input>
       <button onClick={()=>{
        filterfruit.map((e,i)=>
        (               
                           <ul key={i}>{e}</ul>
                       )
                   )  
                   setFilterFruits(filterFruits) 
       }}></button>

    
         
        
        </div>
    )

}

export default SignUp