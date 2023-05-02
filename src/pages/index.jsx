import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from './Home';

export const router = (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<Home />} />
                <Route path="Contact" element={<Home />} />
                <Route path="Projects" element={<Home />} />
            </Route>
        </Routes>
);