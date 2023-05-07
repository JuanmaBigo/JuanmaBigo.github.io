import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

export const router = (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Projects" element={<Projects />} />
            </Route>
        </Routes>
);