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

    const deleteTask=()=>{
        return(
            setTasks(tasks===null)
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
         <button onClick={deleteTask}>Delete</button>
        </ul>
        )
        }
    </div>
  )
}

export default Todo