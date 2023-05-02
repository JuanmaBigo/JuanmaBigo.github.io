import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

export default function MainLayout(props) {
    return (
        <div>
            <Header/>
            <Outlet />
            <h2>Footer</h2>
        </div>
    )
}
