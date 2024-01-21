import React from 'react'
import './Sidebar.css'

import { FaRss, FaUserFriends, FaBookmark, FaCalendarWeek, FaUserCog, FaUserShield, FaUserPlus, FaUserMinus, FaUserTimes, FaUserCheck, FaUserEdit, FaUserSlash, FaUser, FaUsers, FaUserTag, FaUserTie, FaUserNurse, FaUserMd, FaUserInjured, FaUserAstronaut, FaUserSecret, FaUserGraduate, FaUserNinja, FaUserLock, FaVideo } from 'react-icons/fa'

function Sidebar() {
    return (
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    {/* Profile */}
                    <li className="sidebarListItem">
                        <FaRss className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    {/* Messages */}
                    <li className="sidebarListItem">
                        <FaUserFriends className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    {/* Videos */}
                    <li className="sidebarListItem">
                        <FaVideo className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    {/* Groups */}
                    <li className="sidebarListItem">
                        <FaUsers className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    {/* Bookmarks */}
                    <li className="sidebarListItem">
                        <FaBookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    {/* Questions */}
                    <li className="sidebarListItem">
                        <FaCalendarWeek className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    {/* Jobs */}
                    <li className="sidebarListItem">
                        <FaUserCog className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    {/* Courses */}
                    <li className="sidebarListItem">
                        <FaUserShield className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>

                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />

                <ul className="sidebarFriendList">
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Mark Brown</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Eric King</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Mark Brown</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Eric King</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Mark Brown</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Eric King</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Mark Brown</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Eric King</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John Doe</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Mark Brown</span>
                    </li>
                    {/* Add Friend */}
                    <li className="sidebarFriend">
                        <img src="https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Eric King</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar