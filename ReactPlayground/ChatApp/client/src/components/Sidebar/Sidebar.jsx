import React from 'react'
import './Sidebar.css'
import CloseFriend from '../closeFriend/closeFriend'

import { FaRss, FaUserFriends, FaBookmark, FaCalendarWeek, FaUserCog, FaUserShield, FaUserPlus, FaUserMinus, FaUserTimes, FaUserCheck, FaUserEdit, FaUserSlash, FaUser, FaUsers, FaUserTag, FaUserTie, FaUserNurse, FaUserMd, FaUserInjured, FaUserAstronaut, FaUserSecret, FaUserGraduate, FaUserNinja, FaUserLock, FaVideo } from 'react-icons/fa'

// Dummy data for close friends
const user = [
    {
        id: 1,
        profilePicture: "https://via.placeholder.com/150",
        username: "John Sandoval"
    },
    {
        id: 2,
        profilePicture: "https://via.placeholder.com/150",
        username: "Trevor Haddad"
    },
    {
        id: 3,
        profilePicture: "https://via.placeholder.com/150",
        username: "Matt Rafferty"
    },
    {
        id: 4,
        profilePicture: "https://via.placeholder.com/150",
        username: "Chris Gomes"
    },
    {
        id: 5,
        profilePicture: "https://via.placeholder.com/150",
        username: "Jesse Rios"
    },
    {
        id: 6,
        profilePicture: "https://via.placeholder.com/150",
        username: "Dylan Cody"
    },
    {
        id: 7,
        profilePicture: "https://via.placeholder.com/150",
        username: "Tanya Jean"
    },
    {
        id: 8,
        profilePicture: "https://via.placeholder.com/150",
        username: "David Khom"
    },
    {
        id: 9,
        profilePicture: "https://via.placeholder.com/150",
        username: "Chris Pantanos"
    },
    {
        id: 10,
        profilePicture: "https://via.placeholder.com/150",
        username: "Lasco Jones"
    }
]


function Sidebar() {
    return (
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <FaRss className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaUserFriends className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaVideo className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaUsers className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaBookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaCalendarWeek className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaUserCog className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaUserShield className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>

                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />

                <ul className="sidebarFriendList">
                    {user.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Sidebar