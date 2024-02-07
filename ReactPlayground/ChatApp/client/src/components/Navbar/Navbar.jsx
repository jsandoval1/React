import React from 'react'
import { FaBell, FaRegComment, FaSearch, FaUser } from 'react-icons/fa'
import './Navbar.css'

import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import noAvatar from '../../public/images/person/noAvatar.png'


function Navbar() {
    const { user } = useContext(AuthContext)

    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className='logo'> Sandoval </span>
                </Link>
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
                <Link to={`/profile/${user.username}`} style={{ textDecoration: 'none' }}>
                    <img src={user.profilePicture ? user.profilePicture : noAvatar} alt="User profile picture" className="navbarImg" />
                </Link>
            </div>

        </div>
    )
}

export default Navbar