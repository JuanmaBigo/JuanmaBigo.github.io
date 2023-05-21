import React from 'react'
import './Projects.css'
import Project from './Project'
import empireImg from '/projects/empire.png'
import mingaImg from '/projects/minga.png'
import amazingImg from '/projects/amazing-events.png'
import petshopImg from '/projects/petshop.png'
import weatherImg from '/projects/weather-app.png'
import mingaMobile from '/projects/minga-mobile.png'
import empireMobile from '/projects/empire-mobile.png'

export default function Projects() {
    return (
        <section className='projects-section'>
            <h2>{`<Projects Web/>`}</h2>
            <div className='projects'>
                <Project name={'Empire'} linkHost={'https://empire-project.netlify.app/'} linkRepo={'https://github.com/JuanmaBigo/Empire-Front'} img={empireImg} />
                <Project name={'Minga (manga reader)'} linkHost={'https://minga-red.netlify.app/'} linkRepo={'https://github.com/JuanmaBigo/Minga-Front'} img={mingaImg} />
                <Project name={'Amazing Events'} linkHost={'https://juanmabigo.github.io/Amazing-Events/'} linkRepo={'https://github.com/JuanmaBigo/Amazing-Events'} img={amazingImg} />
                <Project name={'Patitas Petshop'} linkHost={'https://juanmabigo.github.io/PetShop/'} linkRepo={'https://github.com/JuanmaBigo/PetShop'} img={petshopImg} />
                <Project name={'Weather App'} linkHost={'https://juanmabigo.github.io/weather-app/'} linkRepo={'https://github.com/JuanmaBigo/weather-app'} img={weatherImg} />
            </div>
            <h2>{`<Projects Mobile/>`}</h2>
            <div className='projects'>
            <Project name={'Empire'} linkHost={'https://empire-project.netlify.app/'} linkRepo={'https://github.com/JuanmaBigo/Empire-Mobile'} img={empireMobile} projectMobile={true} /> {/*  //cambiar link host por un link a youtube y la img */}
            <Project name={'Minga (manga reader)'} linkHost={'https://minga-red.netlify.app/'} linkRepo={'https://github.com/JuanmaBigo/mobile-minga-bigoritto'} img={mingaMobile} projectMobile={true}/>
            </div>
        </section>
    )
}
