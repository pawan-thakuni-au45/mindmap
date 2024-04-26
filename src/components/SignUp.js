import React, { useState } from 'react'

const SignUp = () => {
    const [name,setName]=useState(true)

    const togglePassword=()=>{
        setName(!name)
    }
   return(
    <div>
    
      <input type={name ?"text":"password" } value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={togglePassword}>togglepassword</button>
    </div>
   )

}

export default SignUp