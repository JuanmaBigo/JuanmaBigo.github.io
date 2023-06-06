import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from './Home/Home';
import About from './About/About';
import ProjectsPage from './Projects/ProjectsPage';

export const router = (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Projects" element={<ProjectsPage />} />
            </Route>
        </Routes>
);