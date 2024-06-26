import { NavLink } from 'react-router-dom';
import React from 'react';
import './Navbar.css'; // Make sure to create and link this CSS file

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <a href="/">MERN Project</a>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                            <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                            <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
