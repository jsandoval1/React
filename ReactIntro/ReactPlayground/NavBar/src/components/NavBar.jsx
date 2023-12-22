import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(`Menu is now ${isOpen ? 'closed' : 'open'}`);
    };

    const closeMenu = () => {
        setIsOpen(false);
        console.log('Menu is now closed');
    };

    return (
        <div className={`nav-bar ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Open'} Menu
            </button>
            {isOpen && (
                <nav>
                    <ul>
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default NavBar;