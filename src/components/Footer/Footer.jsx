import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='social-container'>
                <Link to='https://www.instagram.com/juanmabigo/' className='social-logo'>
                    <img src='https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png' />
                </Link>
                <Link to='https://www.instagram.com/juanmabigo/' className='social-logo'>
                    <img src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png' />
                </Link>
                <Link to='https://www.instagram.com/juanmabigo/' className='social-logo'>
                    <img src='https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png' />
                </Link>
            </div>
            <p>
                © 2021 Juan Mateo Bigoritto
            </p>
        </div>
    )
}
