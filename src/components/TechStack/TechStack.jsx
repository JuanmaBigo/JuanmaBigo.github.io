import React from 'react'
import './TechStack.css'
import Skill from './Skill'
export default function TechStack() {
    return (
        <section className='tech-stack-container'>
            <h2>Tech Stack</h2>
            <div className='tech-stack'>
                <Skill name={'JavaScript'} logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'} />
                <Skill name={'React'} logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'} />
                <Skill name={'React Native'} logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'} />
                <Skill name={'Node.js'} logo={'https://www.itnetwork.sk/images/10733/nodejs/nodejs_logo.png'} />
                <Skill name={'Express.js'} logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLA972a1NXwGHTIpgjxpRdu1DD5te1evggDgjNvM_FcbtGxaPYrHbV27RNzJSA_ZhrY28&usqp=CAU'} />
                <Skill name={'HTML 5'} logo={'https://cdn-icons-png.flaticon.com/512/732/732212.png'} />
                <Skill name={'CSS 3'} logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png'} />
                <Skill name={'Redux'} logo={'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'} />
                <Skill name={'React Router'} logo={'https://reactrouter.com/_brand/react-router-mark-color.png'} />
                <Skill name={'NPM'} logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png'} />
                <Skill name={'JWT'} logo={'https://jwt.io/img/icon.svg'} />
                <Skill name={'Git'} logo={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'} />
                <Skill name={'GitHub'} logo={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} />
                <Skill name={'Postman'} logo={'https://cdn.worldvectorlogo.com/logos/postman.svg'} />
                <Skill name={'Figma'} logo={'https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png'} />
                <Skill name={'Canva'} logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png'} />
            </div>
        </section>
    )
}
