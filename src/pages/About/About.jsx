import React from 'react'
import './About.css'
import img1 from '/img-1.jpg'

export default function About() {
    return (
        <div className='about-page'>
            <h2>{`<About me/>`}</h2>
            <section>
            <div className='description'>
                <p>I'm Juanma! I'm 21 years old and I'm a MERN Full Stack Developer. I'm passionate for tech since i got my first smartphone at 10, since then I started reading and investigating all about the tech world. </p>
                <br></br>
                <p>I got experience working primarily in MongoDB, ExpressJS, ReactJS and NodeJS, also React Native for creating mobile apps. I learned the logic of programming in C++ when I took an Object Oriented Programming course at University among other important courses such as Sofware Engineering and worked on different real world projects, both individually and groupally using Agile methodologies in day to day work.</p>
                <br></br>
                <p>I'm a person who really enjoy changes and is constantly looking to learn new things, I like challenges and working under pressure sometimes. I'm very persevering and dedicated, thats why I've been able to become a music teacher at 19, after 10 years of hard study, and after that I was able to teach music at a state school for a year and a half.</p>
                <br></br>
                <p>A hobby of mine is the Pathfinders Club (scouting club) I've been assisting since I'm a child, there I've been able to learn important values and lessons for life, and then when I was older, I got the possibility to lead younger generations.</p>
                <p>If you are looking for a developer with my characteristics and values, have no doubt in reaching me</p>
            </div>
            <div className='gallery'>
            <img src={img1}></img>
                {/* add carousel here */}
            </div>
            </section>
            
        </div>
    )
}
