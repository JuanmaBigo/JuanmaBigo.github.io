import React, { useRef, useState } from 'react'

import './Projects.css'
import webLogo from '/web-logo.png'

export default function Project({ name, linkRepo, linkHost, img, projectMobile }) {
    const card = useRef()
    const [scale, setScale] = useState(1)
    const [transition, setTransition] = useState(0.5)
    const [linksDisplay, setLinksDisplay] = useState(0)


    const handleMouseEnter = () => {
        setScale(1.05)
        setTransition(0.5)
        setLinksDisplay(1)
    }
    const handleMouseLeave = () => {
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
        <div className={!projectMobile? 'project' : 'project project-mobile'} ref={card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styles}>
            <img src={img} />
            <h3>{name}</h3>
            <div className='project-link' style={stylesLinks}>
                <a href={linkHost}><img src={webLogo} /><p>LIVE</p></a>
                <a href={linkRepo}><img src='https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png' /><p>REPO</p></a>
            </div>
        </div>
    )
}
