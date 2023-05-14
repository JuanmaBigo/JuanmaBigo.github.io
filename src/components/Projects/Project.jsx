import React, { useRef, useState } from 'react'

import './Projects.css'
import webLogo from '/web-logo.png'

export default function Project({ name, linkRepo, linkHost, img }) {
    const card = useRef()
    const [state, setState] = useState(false)
    const [scale, setScale] = useState(1)
    const [transition, setTransition] = useState(0.5)
    const [linksDisplay, setLinksDisplay] = useState(0)


    const handleMouseEnter = () => {
        setState(true)
        setScale(1.05)
        setTransition(0.5)
        setLinksDisplay(1)
    }
    const handleMouseLeave = () => {
        setState(false)
        setScale(1)
        setTransition(0.5)
        setLinksDisplay(0)
    }

    const styles = {
        transform: `scale(${scale})`,
        transition: `transform ${transition}s ease-out`
    }

    const stylesLinks = {
        display: linksDisplay,
        transform: `scale(${linksDisplay})`
    }

    return (
        <div className='project' ref={card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styles}>
            <img src={img} />
            <h3>{name}</h3>
            <div className='project-link' style={stylesLinks}>
                <a href={linkRepo}><img src='https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png' /><p>REPO</p></a>
                <a href={linkHost}><img src={webLogo} /><p>LIVE</p></a>
            </div>

        </div>
    )
}
