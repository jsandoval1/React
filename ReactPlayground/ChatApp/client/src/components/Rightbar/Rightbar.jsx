import React from 'react'
import './Rightbar.css'

import { FaBirthdayCake } from 'react-icons/fa';
import Online from '../Online/Online';

//! Dummy Data
const Users = [
    {
        id: 1,
        profilePicture: "https://via.placeholder.com/150",
        username: "Melinda Rye",
    },
    {
        id: 2,
        profilePicture: "https://via.placeholder.com/150",
        username: "Trevor Rye",
    },
    {
        id: 3,
        profilePicture: "https://via.placeholder.com/150",
        username: "Megan Rye",
    },
]

function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <FaBirthdayCake className="birthdayImg" />
                    <span className="birthdayText"><b>John Doe</b> and <b>3 other friends</b> have a birthday today.</span>
                </div>
                <img className="rightbarAd" src="https://via.placeholder.com/300x250" alt="Ad" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>

                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="https://via.placeholder.com/150" alt="User" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Alice Smith</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://via.placeholder.com/150" alt="User" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Bob Johnson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://via.placeholder.com/150" alt="User" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Charlie Brown</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://via.placeholder.com/150" alt="User" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">David Lee</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://via.placeholder.com/150" alt="User" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Emma Davis</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://via.placeholder.com/150" alt="User" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Frank Wilson</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbarContainer">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar