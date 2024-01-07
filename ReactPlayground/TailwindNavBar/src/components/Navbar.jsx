import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';


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
        <>
            {/* Navbar container */}
            < div className="bg-gray-400 p-4" >
                {/* Navbar content to be centered on medium and large screens */}
                <div className="md:mx-auto md:w-3/4 lg:w-2/3 flex justify-between items-center">

                    {/* Desktop menu */}
                    <h1 className="text-2xl font-bold">Navbar</h1>
                    <ul className="space-x-4 hidden md:flex">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : "text-black"} > Home </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : "text-black"}> About </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : "text-black"} > Contact </NavLink>
                    </ul>

                    {/* Mobile menu */}
                    {/* Icon */}
                    <div className='md:hidden z-10' onClick={toggleMenu}> {/* Icon to be shown on small screens */}
                        {isOpen ? <FaTimes size={32} color='red' onClick={toggleMenu} /> : <GiHamburgerMenu onClick={toggleMenu} />}
                    </div>
                    {/* Links */}
                    <ul className={`${isOpen
                        ? `text-white opacity-100 transform translate-x-0`
                        : `opacity-0 transform -translate-y-full`} transition transform
                    absolute top-0 left-0 w-full h-screen bg-zinc-800/60 flex 
                    flex-col items-center justify-center space-y-4 md:hidden text-2xl font-bold`}>
                        <NavLink exact to="/" className={({ isActive }) => isActive ? "text-red-500" : "text-white"} onClick={closeMenu} > Home </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500" : "text-white"} onClick={closeMenu} > About </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : "text-white"} onClick={closeMenu} > Contact </NavLink>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Navbar;