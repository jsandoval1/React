import React from 'react'
import { FaBell, FaRegComment, FaSearch, FaUser } from 'react-icons/fa'
import './Navbar.css'


function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className='logo'> Sandoval </span>
            </div>

            <div className="navbarCenter">
                <div className="searchBar">
                    <FaSearch className="searchIcon" />
                    <input className='searchInput' type="text" placeholder="Search for something" />
                </div>
            </div>

            <div className="navbarRight">
                <div className="navbarLinks">
                    <span> Home </span>
                    <span> Timeline </span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <FaUser />
                        <span className="navbarIconBadge"> 1 </span>
                    </div>
                    < div className="navbarIconItem">
                        <FaRegComment />
                        <span className="navbarIconBadge"> 2 </span>
                    </div>
                    <div className="navbarIconItem">
                        <FaBell />
                        <span className="navbarIconBadge"> 1 </span>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="navbarImg" />
            </div>

        </div>
    )
}

export default Navbar