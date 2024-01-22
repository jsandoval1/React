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

function Rightbar() {
    return (
        <div className="rightbarContainer">
            <div className="rightbarWrapper">

                <div className="birthdayContainer">
                    <FaBirthdayCake className="birthdayImg" color='orange' />
                    <span className="birthdayText">
                        <b>Username</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>

                <img className="rightbarAd" src="https://via.placeholder.com/500x300?text=Sample+Ad" alt="Ad" />

                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Rightbar