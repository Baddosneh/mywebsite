import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './components/About';
import Rent from './components/Rent';
import Buy from './components/Buy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Main() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);