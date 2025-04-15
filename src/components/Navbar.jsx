import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart,  User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top   text-white"
      style={{
        
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <a
          className="navbar-brand fw-bold text-primary"
          
          style={{
            fontSize: '1.5rem',
            letterSpacing: '2px',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            
          }}
        >
          <img src="https://media.sketchfab.com/models/14098492e1ba4cd1a18c977a30689d4b/thumbnails/06095ddc24a04bbc967a8186019327ac/8bef94edf07b4bbbbc5b1bddfd8277c1.jpeg" alt="Avatar Logo" style={{width: "50px"}} className="rounded-pill"></img>
          AutoElite
        </a>
        
        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse row" id="navbarNav">
          <div className='col-8'><ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                className="nav-link text-white btn btn-outline-primary fw-bold mx-2"
                to="/"
                style={{
                  borderRadius: '20px', // For rounded-pill
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // For shadow
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white btn btn-outline-primary fw-bold mx-2"
                to="/buy"
                style={{
                  borderRadius: '20px', // For rounded-pill
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // For shadow
                }}
                >
                 Buy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white btn btn-outline-primary fw-bold mx-2"
                to="/rent"
                style={{
                  borderRadius: '20px', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                }}
              >
                Rent
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white btn btn-outline-primary fw-bold mx-2"
                to="/about"
                style={{
                  borderRadius: '20px', // For rounded-pill
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // For shadow
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-outline-primary p-2 text-white fw-bold mx-2"
                to="/contact"
                style={{
                  borderRadius: '20px', // For rounded-pill
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // For shadow
                }}
               
              >
                Contact
              </Link>
            </li>
          </ul></div>

          <div className='col-2'>
            <ShoppingCart
              className="text-white mx-2"
              size={20}
              
            />
            <User
              className="text-white mx-2"
              size={20}
             
            />
          </div>
          {/* Right Section: Icons */}
          <div className="d-flex align-items-center shadow ms-3 col-2 rounded-pill">
            
            <div className='  form-control-inline rounded-pill form-control-sm d-flex align-items-center'>
              <input
                type="text"
                className="form-control form-control-sm me-2  "
                placeholder= 'search'
                aria-label="Search"
                style={{
                  borderRadius: '50px', // For rounded-pill
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // For shadow
                }}
               />
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
