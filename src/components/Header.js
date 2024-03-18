import React from 'react'
import './Header.css' 
import IconButtons from './IconButtons.js'


const Header = () => {
  return (
    <div className="Header"> 
    <IconButtons name="menu" onClick={()=>alert('click')}/>
    Header
    </div>
   )
}

export default Header