import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-container">
                <div>
                    <h1>Logo</h1>
                </div>
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;