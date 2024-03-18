import React from 'react'
import IconButtons from './IconButtons'
import Icon from './Icon.js'

const Toolbar = (props) => {
    const list=[
        {name:'home',onClick:()=>alert('Home')},
        {name:'help',onClick:()=>alert('Help')}

    ]
  return (
    list.map(item=>(
        <IconButtons key={item.name} name={props.name} onClick={item.onClick} type={props.type}></IconButtons>
    ))
  )
}

export default Toolbar