
import { useState } from "react"
const Filter= () => {
const [fruits,setFruits]=useState(["Apple","Banana","guava"])
const [fruit,setFruit]=useState("")

const afruit=fruits.filter((item)=>(
    item.toLowerCase
))
    return(
<div>

<input type="text" placeholder="what are you looking for" 
value={fruit} onChange={(e)=>setFruit(e.target.value)}
></input>
{
    fruits.map((e)=>(
      <ul>
        <li>{e}</li>
      </ul>
    ))
}
</div>
    )
}
export default Filter