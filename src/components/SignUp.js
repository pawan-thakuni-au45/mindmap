import React, { useState } from 'react'

const SignUp = () => {
    const[fruits,setFruits]=useState(["apple","ball","cat"]);
    const[filterFruits,setFilterFruits]=useState([])

    const filterfruitHandler=()=>{
        setFilterFruits(fruits)
    }


    return (
        <div>
         <input type="text" value={filterFruits} onChange={(e)=>setFilterFruits(e.target.value)}></input>
         <button onClick={filterfruitHandler}></button>
         <p>
           {
            filterFruits.filter((e,i)=>{
                return (
                    <h key={i}>{e}</h>
                )
            })
           }
         </p>
        
        </div>
    )

}

export default SignUp