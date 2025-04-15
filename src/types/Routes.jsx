import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Buy from '../components/Buy';
import Rent from '../components/Rent';

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Welcome to AutoElite!</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
    </Router>
  );
}