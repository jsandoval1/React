import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger menu icon from react-icons
import { FaTimes } from 'react-icons/fa'; // Close icon from react-icons

function Navbar() {
    // State to manage the open/closed state of the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    // Function to close the mobile menu when a link is clicked
    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <div className="bg-gray-400 p-4"> {/* Navbar container */}
            <div className="md:mx-auto md:w-3/4 lg:w-2/3 flex justify-between items-center"> {/* Navbar content to be centered on medium and large screens */}
                {/* Desktop menu */}
                <h1 className="text-2xl font-bold">Navbar</h1>
                <ul className="space-x-4 hidden md:flex">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {/* Mobile menu icon */}
                <div className='md:hidden z-10' onClick={toggleMenu}> {/* Icon to be shown on small screens */}
                    {isOpen ? <FaTimes size={32} color='red' onClick={toggleMenu} /> : <GiHamburgerMenu onClick={toggleMenu} />}
                </div>
                {/* Mobile menu links */}
                <ul className={`${
                    isOpen
                        ? `text-white opacity-100 transform translate-x-0`
                        : `opacity-0 transform -translate-y-full`} transition transform
                    absolute top-0 left-0 w-full h-screen bg-zinc-800/60 flex 
                    flex-col items-center justify-center space-y-4 md:hidden text-2xl font-bold`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </div>
        </div >
    )
}

export default Navbar;