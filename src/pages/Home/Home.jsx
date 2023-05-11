import React from 'react'
import './Home.css'
import juanma from '/juanma-photo.png'
import TechStack from '../../components/TechStack/TechStack'

export default function Home() {
    return (
        <div className='home'>
            <section className='home-main-section'>
            <div className='text-box'>
                <h3>Hey There!</h3>
                <h4>I'm Juanma</h4>
                <h1>Full Stack Developer MERN</h1>
            </div>
                <img className='' src={juanma}/>
            </section>

            <TechStack/>

            {/* <Projects/> */}
        </div>
    )
}
