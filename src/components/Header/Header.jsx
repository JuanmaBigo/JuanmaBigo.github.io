import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header-container'>
            <img src='/logo-juanma.png' />
            <div className='header-links'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/About' className='link'>About</Link>
                <Link to='/Projects' className='link'>Projects</Link>
                <Link to='/Contact' className='link'>Contact</Link>
            </div>
        </div>
    )
}
