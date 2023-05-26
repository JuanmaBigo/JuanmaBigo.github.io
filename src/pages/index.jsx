import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact';
import Projects from './Projects/Projects';
import ProjectDetails from './Projects/ProjectDetails';

export const router = (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="Projects/:name" element={<ProjectDetails />} />
            </Route>
        </Routes>
);