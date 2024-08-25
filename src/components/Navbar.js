import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src= "{ Nav}" alt="Nexinfluence Logo" className="logo" />
            </div>
            <div className="navbar-middle">
                <input type="text" placeholder="Search for products..." className="search-bar" />
            </div>
            <div className="navbar-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/services" className="nav-link">Services</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
