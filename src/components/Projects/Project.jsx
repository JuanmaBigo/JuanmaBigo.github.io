import React from 'react'
import './Projects.css'

export default function Project({ name, linkRepo, linkHost, img }) {
    return (
        <div className='project'>
            <img src={img} />
            <h3>{name}</h3>
            <div className='project-link'>
                <a href={linkRepo}>Repo</a>
                <a href={linkHost}>Host</a>
            </div>

        </div>
    )
}
