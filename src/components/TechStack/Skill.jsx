import React, {useRef, useState} from 'react'
import './TechStack.css'

export default function Skill({logo, name}) {
    // cambiar color cada vez que se hace hover
    const skill = useRef()
    const [color, setColor] = useState('')
    const [transition, setTransition] = useState(0)


    const handleMouseEnter = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        setColor(`#${randomColor}`)
        setTransition(0.1)
    }
    const handleMouseLeave = () => {
        setColor('transparent')
        setTransition(5)
    }


    const styles = {
        backgroundColor: color,
        transition: `background-color ${transition}s ease-out`,
    }

    return (
        <div className='skill' ref={skill} style={styles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={logo} alt={name}/>
            <h3>{name}</h3>
        </div>
    )
}
