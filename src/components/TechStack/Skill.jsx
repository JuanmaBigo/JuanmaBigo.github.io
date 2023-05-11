import React from 'react'
import './TechStack.css'

export default function Skill({logo, name}) {
    return (
        <div className='skill'>
            <img src={logo} alt={name}/>
            <h3>{name}</h3>
        </div>
    )
}
