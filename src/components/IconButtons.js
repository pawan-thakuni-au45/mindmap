import React from 'react'
import './IconButtons.css'
import Icons from './Icons.js'


const IconButtons = (props) => {
  return (
    <div className='button' onClick={props.onClick}>
    <Icons type={props.type} name={props.name}/>
    </div>
  )
}

export default IconButtons