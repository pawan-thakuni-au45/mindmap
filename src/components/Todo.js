import React, { useState } from 'react'

const Todo = () => {
    const[task,setTask]=useState()
    const[tasks,setTasks]=useState([])
    
    const handleClick=()=>{
        setTask(" ")
        return(
   setTasks([...tasks,task])
   
   
        )
       
    }
   
  return (
    <div>
    <input type="text" 
    placeholder='Add your Task'
    value={task}
    onChange={(e)=>setTask(e.target.value)}>
    
    
    </input>
    <button onClick={handleClick}>Add</button>

    {
        tasks.map((e)=>
          <ul>
         <li>{e}</li>
        </ul>
        )
        }
    </div>
  )
}

export default Todo