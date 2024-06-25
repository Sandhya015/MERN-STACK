import React from 'react';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <a href="/">MERN Project</a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
