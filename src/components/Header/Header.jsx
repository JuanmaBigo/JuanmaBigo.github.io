import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)


    return (
        <div>
            <div className='header-container'>
                <div className='menu' onClick={toggle}>
                    <img className='menu-logo' src='/menu-logo.png' onClick={toggle}></img>
                </div>
                <Link to='/' className='logo-juanma'>
                    <img src='/logo-juanma.png' />
                </Link>
                <div className='header-links'>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/About' className='link'>About</Link>
                    <Link to='/Projects' className='link'>Projects</Link>
                    {/* <Link to='/Contact' className='link'>Contact</Link> */}
                    
                </div>
            </div>

            {
                isOpen && <div className='menu-mobile'>
                        <Link to='/' className='link'>Home</Link>
                        <Link to='/About' className='link'>About</Link>
                        <Link to='/Projects' className='link'>Projects</Link>
                       {/*  <Link to='/Contact' className='link'>Contact</Link> */}
                </div>
            }
        </div>
    )
}
