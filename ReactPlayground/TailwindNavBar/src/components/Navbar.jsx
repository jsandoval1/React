import React from 'react'

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="bg-gray-400 p-4">
            <h1 className="text-2xl text-center font-bold">Navbar</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar