

import React, { useState } from 'react'
const HomePage=()=>{

    const[textTak,setTextTask]=useState("")
    
   

    const handleClick=()=>{
          setTask([textTak,...task])
          setTextTask("")
    }
    const deleteHandle=()=>{
        setTask([""])
         
    }


    return(
      <div>
        <input className="border border-black-300 bg-green-600 p-4 m-4 h-10 w-10" type="text" value={textTak} onChange={(e)=>setTextTask(e.target.value)}></input>
        <button className="bg-red-800" onClick={handleClick}>btn</button>
        {
            task.map((e,i)=>{
                return(
                   <p key={i}>{e}
                   <button onClick={deleteHandle}>delete</button>
                   </p>
                )
            })
        }
      </div>

    )

}
export default HomePage