import React, { useState } from 'react';

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand navbar-title" href="/">
                            { ">_ "}AltF4 Games
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={handleToggle}
                            aria-expanded={isNavOpen}
                            aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/games/">
                                        Games
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/projects/">
                                        Projects
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about/">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;